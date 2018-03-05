library(rvest) # Scrapping
library(readr) # Export CSV
library(purrr) # Data manipulation

# vector containing character(0) are ignored
safe_na <- function(value) {
  return (ifelse(identical(value, character(0)), NA, value))
}

get_offers_ids <- function() {
  webpage <- read_html('https://www.leboncoin.fr/ventes_immobilieres/offres/pays_de_la_loire/?th=1&location=Nantes%2044000%2CNantes%2CNantes%2044200&pe=4&sqs=0&sqe=2&ret=2')
  
  offers <- 
    webpage %>% html_nodes('[itemtype$=Offer]')
  
  get_offer_link <- function(offer) {
    links <- 
      offer %>% html_nodes('a') %>% 
      html_attr('href')
    
    offers_ids <- 
      links %>% sub(pattern = ".*/(.*).htm.*", replacement = "\\1", x = .)
    
    return(offers_ids)
  }
  
  return(map_chr(offers, get_offer_link))
}

get_offer_details <- function(offer_id) {
  offer_link <- paste(
    "http://www.leboncoin.fr/ventes_immobilieres/", offer_id, ".htm?ca=18_s",
    sep=""); 
  
  offer <- read_html(offer_link)
  
  description <- 
    offer %>% html_nodes('[data-qa-id=adview_spotlight_description_container]')
  
  title <- 
    description %>% html_nodes('[data-qa-id=adview_title]') %>% 
    html_text(trim = TRUE)
  
  price <- 
    description %>% html_nodes('[data-qa-id=adview_price] span') %>%
    html_text(trim = TRUE) %>%
    gsub(pattern="(\\s|\u20AC)", replacement="", x = .) %>% 
    as.numeric()
  
  date <- 
    description %>% html_nodes('[data-qa-id=adview_date]') %>% 
    html_text(trim = TRUE) %>%
    strptime(format="%d/%m/%Y à %kh%M", tz="Europe/Paris") %>%
    as.POSIXct()
  
  surface <- 
    offer %>% html_nodes('[data-qa-id=criteria_item_square] > div:nth-child(2)') %>% 
    html_text(trim = TRUE) %>%
    sub(pattern = "(.*)m²", replacement = "\\1", x = .) %>%
    as.numeric()
  
  dpe <- 
    offer %>% html_nodes('[data-qa-id=criteria_item_energy_rate] > div:nth-child(2)') %>%
    html_text(trim = TRUE) %>%
    sub(pattern = "([A-Z]).*", replacement = "\\1", x = .) %>%
    safe_na
  
  ges <- offer %>% html_nodes('[data-qa-id=criteria_item_ges] > div:nth-child(2)') %>% 
    html_text(trim = TRUE) %>%
    sub(pattern = "([A-Z]).*", replacement = "\\1", x = .) %>%
    safe_na
  
   tibble::tibble(
     title = title, price = price, date = date, surface = surface,
     dpe = dpe, ges = ges, link = offer_link)
}

offers_ids <- get_offers_ids()
offers <- purrr::map_df(offers_ids, get_offer_details)

write_csv(offers, "leboncoin.csv")