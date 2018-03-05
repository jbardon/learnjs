library(shiny)
library(DT) # Table
library(ggplot2) # Plot

shinyUI(fluidPage(
  titlePanel("Appartements"),
  fluidRow (
    DT::dataTableOutput("table")
  ),
  fluidRow(
    plotOutput("plot")
  )
))
