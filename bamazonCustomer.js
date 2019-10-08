var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProductLists();

});

function displayProductLists() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
        }
        console.log("-----------------------------------");
        purchaseQuestions();
    });
}


function purchaseQuestions() {
    inquirer.prompt([
        {
            name: "product_ID",
            message: "What is the ID of the product you would like to buy?"
        },
        {
            name: "product_units",
            message: "How many units would you like to purchase of this product?"
        }
    ]).then(function (answer) {

        var chosenId = answer.product_ID;
        console.log("Chosen item ID: ", chosenId);

        var userQuant = answer.product_units;
        console.log("Chosen quantity from stock: ", userQuant, "\n");

        connection.query("SELECT * FROM products WHERE ?",
            {
                item_id: chosenId
            },
            function (err, res) {
                if (err) throw err;
                console.log("Stock quantity: ", res[0].stock_quantity);
                if (res[0].stock_quantity > userQuant) {
                    console.log("You can buy!");
                    console.log("New remaining stock quantity: ", res[0].stock_quantity - userQuant);
                    console.log("Total Cost: $", userQuant * res[0].price)
                    console.log("-----------------------------------");
                }
                else { console.log("Insufficient quantity") }

            })




        connection.end();

    })

}
