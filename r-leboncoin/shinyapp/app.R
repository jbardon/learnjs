library(shiny)
library(shinydashboard)

library(DT)
library(readr)
library(ggplot2)
library(scales)

ui <- dashboardPage(
  dashboardHeader(title = "Le Bon Coin"),
  dashboardSidebar(
    sidebarMenu(
      menuItem("Table", tabName = "table", icon = icon("dashboard")),
      menuItem("Plot", tabName = "plot", icon = icon("th"))
    )
  ),
  dashboardBody(
    tabItems(
      tabItem(tabName = "table",
          fluidRow (
            DT::dataTableOutput("table")
          )
      ),
      tabItem(tabName = "plot",
          fluidRow(
            plotOutput("plot")
        )
      )
    )
  )
)

server <- function(input, output) {
  data <- read_csv("../leboncoin.csv")
  
  output$table <- DT::renderDataTable(
    DT::datatable({
      data
    })
  )
  
  output$plot <- renderPlot({
    ggplot(
      data,
      aes(y = price, x = surface)) 
    + geom_point()
    + scale_y_continuous(labels = comma)
  })
}

shinyApp(ui, server)

# Or
# shinyUI(ui)
# shinyServer(server)