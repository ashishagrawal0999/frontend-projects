const favMovie = "Avatar";
let guess = prompt("Guess my favourite movie");

// while((guess != favMovie) && (guess != "quit") )


while((guess != favMovie)){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }

    guess = prompt("Wrong guess.Please try again");
}

if(guess == favMovie){
    console.log("Congrats!!");
} 


