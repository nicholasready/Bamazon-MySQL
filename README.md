# Bamazon-MySQL & Node.js

## Overview

In this activity, I created an Amazon-like storefront with the MySQL database and Node.js . The application takes in orders from the "customer" and depletes the stock from the store's inventory as well as displays the total cost of that item being sold. 

## MySQL Database

Five different columns were created that contained the data for:

    * item_id (unique id for each product)

    * product_name (Name of product)

    * department_name

    * price (cost to customer)

    * stock_quantity (how much of the product is available in stores)

The theme for the database was "Greenhouse" items and 10 "mock" data rows were inserted into the MySQL database. 

## Running the Application

Running Node.js in the terminal with the file name would display all of the items available for sale. Immediately after the items are displayed, the user would be prompted with two messages:

1) Asking the customer what the ID of the product they would like to purchase
2) Asking the customer how many units of the product they would like to buy

The Inquirer.js NPM package was used as the tool to prompt the customer for these messages. Inquirer.js is a collection of common interactive command-line user interfaces.

## Examples

If a customer enters a quantity that excedes the current stock quantity of that item, the customer will get a message of "Insufficient quantity!" and prevent them from going through:
![](insufficient.gif)

If a customer enters a valid quantity, they will be prompted with a message of "You can buy!", the remaining stock quantity and the total cost to the customer (price * quantity purchased). 
![](succulents.gif)
