library(rvest)

get_offer_details <- function(link) {
  offer_details_html <- read_html(link)
  
  description <- offer_details_html %>% html_nodes('[data-qa-id=adview_spotlight_description_container]')
  title <- description %>% html_nodes('[data-qa-id=adview_title]') %>% html_text(trim = TRUE)
  price <- description %>% html_nodes('[data-qa-id=adview_price] span') %>% html_text(trim = TRUE)
  date <- description %>% html_nodes('[data-qa-id=adview_date]') %>% html_text(trim = TRUE)
  surface <- offer_details_html %>% html_nodes('[data-qa-id=criteria_item_square] > div:nth-child(2)') %>% html_text(trim = TRUE)
  dpe <-  offer_details_html %>% html_nodes('[data-qa-id=criteria_item_energy_rate] > div:nth-child(2)') %>% html_text(trim = TRUE)
  ges <-  offer_details_html %>% html_nodes('[data-qa-id=criteria_item_ges] > div:nth-child(2)') %>% html_text(trim = TRUE)
  
  return(c(title, price, date, surface, dpe, ges))
}

offers_list_html <- read_html('https://www.leboncoin.fr/ventes_immobilieres/offres/pays_de_la_loire/?th=1&location=Nantes%2044000%2CNantes%2CNantes%2044200&pe=4&sqs=0&sqe=2&ret=2')

items <- offers_list_html %>% html_nodes('[itemtype$=Offer]')
offers <- data.frame(title = character(0),
                     price = numeric(0),
                     date = character(0),
                     surface = character(0),
                     dpe = character(0),
                     ges = character(0),
                     stringsAsFactors = FALSE)

for (i in seq_along(items)) {
  offer <- items[i]
  link <- offer %>% html_nodes('a') %>% html_attr('href')
  full_link <- paste('http:', link, sep="")
  toto <- c(get_offer_details(full_link), link)
  offers[i,] <- toto
}
