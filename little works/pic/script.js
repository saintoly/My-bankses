var str = "hello";
var count = 0;
while(count < str.lenght) {
	alert(str[count]);
	count++;
}


count = 5;
while(count <= 40){
alert("count is: " + count);
	count+=5;
}

var age = 21;
var birth = prompt("How old are you?");
// If age is negative
if(Number(birth) === age) {
 alert("Happy 21st Birthday!");
}
 
// If age is 21  
else if(Number(birth) < age) {
 alert("Sorry come back at 18!");
}
 
// If age is odd
//(not evenly divisible by two)
else {
 alert("Go in and have fun!");
}
 
// If age is a perfect square
if(birth % Math.sqrt(birth) === 0) {
  alert("Your age is a perfect square!");
}

//var secretNumber = 6;
//ask user for guess
//var stringGuess = prompt("Guess a number");
//var guess = Number(stringGuess);

//check is guess is right
//if(guess === secretNumber) {
//	alert("YOU GOT IT RIGHT");
//}
//check if guess is higher
//else if (guess > secretNumber) {
//	alert("Too high. Guess again!");
//}

//else {
//	alert("Too low. Guess again!");
//}
//if(age < 0) {
 //console.log("Come back once you're out of the womb");
//}

//prompt("how old are you");
//var age = 21;
//if("age < 21"){
//	alert("error")
//}
//else if("age = 21"){
//	alert("Happy 21th birthday")
//}

//var age = prompt("How old are you?");
//alert(age + " years is roughly" + " " + [age * 365] + " days on earth" );
//alert("You are roughly " + [age * 365] + " days on earth");


//var firstName = prompt("What is your firstname?");
//var lastName = prompt("What is your last name?");
//var  age = prompt("How old are you?");
//alert("Your full name is " + firstName + " " + lastName);
//alert("You are " + age + " years old");
//console.log("Your full name is " + firstName + " " + lastName);
//console.log("You are " + age + " years old");

//var userName = prompt("What is your name?");
//alert("Nice to meet you, " + userName);
//console.log("Am learning JS, " + userName);