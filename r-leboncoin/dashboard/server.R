library(shiny)
library(DT)
library(readr)
library(ggplot2)

shinyServer(function(input, output) {
  data <- read_csv("../leboncoin.csv")
  
  output$table <- 
    DT::renderDataTable(DT::datatable({
      data
  }))
  
  output$plot <- 
    ggplot(
      data,
      aes(y = price, x = surface)
    ) + geom_point()
})
