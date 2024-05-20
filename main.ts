#! /usr/bin/env node 

import inquirer from "inquirer"

let myBalance = 10000;

let myPin = 4567;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"

        }
    ]
)

if(pinAnswer.pin === myPin){
    console.log("Your pincode is correct");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select your option",
                type: "list",
                choices: ["withdraw", "checkbalance"]
            }
        ]
    );

    console.log(operationAns);

    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );

        myBalance -= amountAns.amount;

        console.log(`your remaining balance is: ${myBalance}`);

    }


      else if (operationAns.operation === "checkbalance"){
        console.log(`your balance is: ${myBalance}`)
 
}
}
else {
    console.log("Your pincode is wrong");
}    

