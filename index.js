#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollars
let myPin = 12345;
let remainigBalance = "Your remainig balance is : ";
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Welcome to your account!!!");
    let operations = await inquirer.prompt([
        {
            name: "operation",
            message: "Select your option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operations.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount < myBalance) {
            myBalance -= amountAnswer.amount;
            console.log(remainigBalance + myBalance);
        }
        else {
            console.log("Insuficient balance");
        }
    }
    else if (operations.operation === "fast cash") {
        let amountSelect = await inquirer.prompt([
            {
                name: "select",
                message: "Select one of given option",
                type: "list",
                choices: ["500", "1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= amountSelect.select;
        console.log(remainigBalance + myBalance);
    }
    else if (operations.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
