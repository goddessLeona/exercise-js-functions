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
