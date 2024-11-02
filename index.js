// Uppgift 1

function greeting (){
    console.log("Hello world")
}

greeting()

// Uppgift 2

function favoriteNummber (){
    console.log("My favorite nummber is 42")
}

favoriteNummber()

// Uppgift 3

function magicEightBall(){
    const options = ["Maybe","Ask again later","yes","no"];
    const randomNr = Math.floor(Math.random() * options.length);
    console.log(options[randomNr])
}

magicEightBall();

// Uppgift 4

function Getcurrentyear(){
    const year = new Date();
    //let getyear = year.getFullyear();
    console.log(year.getFullYear());
}

Getcurrentyear()

/// Uppgift 5

function randomjokes (){
    const jokes = ["ha ha ", "joke2", "Joke 4","that was fun"];
    const randomjoke = Math.floor(Math.random() * jokes.length);
    console.log(jokes[randomjoke])
}

randomjokes();

// Segment 2: Functions with Parameters (One or More)

// Uppgift 6

function Pgreeting (name){
    console.log(`hello, ${name} !`)
}
Pgreeting();

// Uppgift 7

function add (nr1, nr2){
    sum = nr1 + nr2;
    console.log(`the result is ${sum}`);
} 
add()

// Uppgift 8

function ageInMonth(age){
    month = age * 12;
    console.log(`there are this many ${month} month in this many ${age} years `)
}
ageInMonth()

// Uppgift 9 Celcius to fahrenhait

function celsiusToFarenheit (celsius){
    farenhait = (celsius - 30) /2;
    console.log(farenhait)
}
celsiusToFarenheit()

// Uppgift 10 Full Name

let getFullName = (firstName, lastName) =>{
    let fullname = `${firstName} ${lastName}`;
    console.log(`this is your full name ${fullname}`);
}

getFullName()

// Segment 3: Functions with Parameters and Return Values

// Uppgift 11 Area of a Rectangle

function calculateArea (length, width){
    area = length * width
    console.log(`the area is ${area}`)
}

// Uppgift 12 Find Maximum


function findMax (nr1, nr2){
    if(nr1<nr2){
        console.log(`The nr ${nr2} is the biger nr`)
    }else{
        console.log(`the bigest nr is ${nr1}`)
    }
}

// Uppgift 13 Count Vowels (not working)

function countWowels (str){
    const wowels = ["a","e","i","o","u","y"]
    let count = 0;
    
    for (let letter of str.toLowercase()){
        if(wowels.includes(letter)){
            count++;
        }
    }
    console.log(count)
}

//Uppgift 14 Discount price

function CalculateDiscount(price, discount){
    const NewPrice = price / 100
    const discounaway = NewPrice * discount
    console.log(discounaway)
}

// Uppgift 15

function reverseString(str){
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const Joinarray = reverseArray.join("");
    console.log(Joinarray)
}

//Level Intermediate

// Uppgift 1 Palindrome checker

function isPalindrome (str){
    const splitString = str.split("").reverse().join("");

    if(str === splitString){
        console.log(`This is a Palindrom`)
    }else{
        console.log(`This is not a Palindrom`)
    }
}

// Uppgift 2 FizzBuzz

function fizzBuzz (nummber){
    if ((nummber % 3)=== 0 & ((nummber % 5)=== 0)){
        console.log("FizzBuzz")
    } else if ((nummber % 5) === 0){
        console.log("buzz")
    }else if( (nummber % 3) === 0){
        console.log("Fizz")
    }else{
        console.log(nummber)
    }
}

// Uppgift 3 Factorial Calculator

//Write a function called factorial that takes a positive integer as a parameter 
//and returns the factorial of that number (e.g., 5! = 5 × 4 × 3 × 2 × 1).

function factorial (nummber2){


}