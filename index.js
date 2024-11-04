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


function factorial (positivenr){

if(positivenr < 0){
    return -1;
}else if(positivenr === 0){
    return 1;
}else{
    return(positivenr * factorial (positivenr -1));
}
}

// Uppgift 4 Longest word in sentence 

function findLongetsWord (sentence){
    sentence = sentence.match(/[a-zA-Z0-9]+/gi);
    let longestWord = "";

    for(let i = 0; i < sentence.length; i++){
        if(sentence[i].length > longestWord.length){
            longestWord = sentence[i];
        }
    }
    return longestWord 
}

// Uppgift 5 Array Average

function calculateAverage (arr){
    
    let sum = 0;

    for( let i = 0; i< arr.length; i++){
        sum +=arr[i]
    }
    return sum/arr.length
}

// Uppgift 6 + 9 Remove Duplicates

function removeDuplicates (array){
    let doubleNr = [];

    for (let i = 0; i < array.length; i++){
        doubleNr.push(array[i]*2);
    }
    console.log(array)
    console.log(doubleNr)

    const jonedArray = array.concat(doubleNr);
    console.log(jonedArray)
    let array3 = [...new Set(jonedArray)];
    console.log(array3);
}

//Uppgift 7 Capitalize First Letter

function capitalizeFirstLetter(str){

    let firtLetter = str[0].toUpperCase();
    str = firtLetter + str.slice(1);

    console.log(str)
}

// Uppgift 8 Count Occurences

function countOccurrences (str, character){

    const times = str.split(character).length -1;


    console.log(` the character: ${character} acured in the string: "${str}" ${times} times `)
}

// Uppgift 10 Random Password Generator

// Write a function called generatePassword that takes a length as a parameter and returns a randomly generated password of that length, 
//using uppercase letters, lowercase letters, and numbers.