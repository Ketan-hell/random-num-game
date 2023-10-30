const prompt = require("prompt-sync")();
let n = Math.floor(Math.random() * 100);
let a = prompt("enter a number between 1 to 100");
a = Number.parseInt(a);
let c = 0;
while(a!=n){
if(a>n){
  console.log("your number is greater. Guess again!");
  c++;
  a = prompt("enter a number between 1 to 100");
  a = Number.parseInt(a);
  
}else if(a<n){
  console.log("your number is smaller. Guess again!");
  c++;
  a = prompt("enter a number between 1 to 100   ");
  a = Number.parseInt(a);
}
}
while(a==n){
  console.log("you guessed the correct number");
  c++;
  break;
}
console.log("The number of chances used was:",c);
console.log("Your score is:", 100-c);
console.log("The random number was:", n);