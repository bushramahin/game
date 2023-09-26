#! /usr/bin/env node
import inquirer from "inquirer";
import showBanner from "node-banner";
import { random } from "./functions.js";
import gradient from "gradient-string";
let guess = [
    {
        name : "gussed_number",
        type : "number",
        message : gradient.passion("What do you think which number is this?") 
    }
];
let again_guess = [
    {
        name : "again",
        type : "confirm",
        message :gradient.pastel("Do you want to guess again?")
    }
]



async function thinking (){
    let condition = true
   while(condition){
   
    let {gussed_number} = await inquirer.prompt(guess);
    let correct_num = random()
    
        if(correct_num == gussed_number){
            // (async ()=>{
            //     await showBanner('You Won' , 'green')
            // })();
            console.log("You Won");
            console.log("The number is : " , correct_num);
            
        }
       else{
        // (async () => {
        //     await showBanner('Unfortunately You Lose !')
        // })();
        console.log("Unfortunately You Lose !");
        console.log("The number is : " , correct_num);
        }
        let {again} = await inquirer.prompt(again_guess)
        condition = again
   }
}
thinking()