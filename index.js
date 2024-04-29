#!/usr/bin/env node
import inquirer from "inquirer";
let randomnumber = Math.floor(10000 + Math.random() * 90000);
let mybalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter your name :",
    },
    {
        name: "courses",
        type: "list",
        message: "select your courses",
        choices: ["Typescript", "Javascript", "Python", "Next"],
    }
]);
const coursesAmount = {
    "Typescript": 5000,
    "Javascript": 4000,
    "Python": 8000,
    "Next": 8000,
};
console.log(`Amount of courses :${coursesAmount[answer.courses]}`);
console.log(`Current balance: ${mybalance}`);
let paymentCourse = await inquirer.prompt([
    {
        name: "amount",
        type: "input",
        message: "Transfer course amount:",
    }
]);
let tutionfees = coursesAmount[answer.courses];
let totalAmount = parseFloat(paymentCourse.amount);
if (tutionfees === totalAmount) {
    console.log(`\n Congratulation you are successfull in course ${answer.courses}\n`);
    let ans = await inquirer.prompt([
        {
            name: "check",
            type: "list",
            message: "What do you want to do next",
            choices: ["View status", "Exit"],
        },
    ]);
    if (ans.check === "View status") {
        console.log("\n***STUDENT CURRENT STATUS***\n");
        console.log(`Student Name:${answer.student}`);
        console.log(`Student ID:${randomnumber}`);
        console.log(`Student Courses:${answer.courses}`);
        console.log(`Course amount paid:${totalAmount}`);
        console.log(`Balance:${mybalance += totalAmount}`);
    }
    else {
        console.log("Exit");
    }
}
else {
    console.log(`Invalid amount entered from the course ${answer.courses}`);
}
