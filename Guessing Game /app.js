const max = prompt("Enter the maximum number");

console.log(max);

const random = Math.floor(Math.random() * max) + 1; 

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if( guess == random ){
        console.log("you are right! congrats!");
        break;

    } else if ( guess < randon){
        console.log("hint: your guess was too small. please try again");

    } else {
        console.log("hint: your guess was too big. please try again")
    }


    //  else {
    //     guess = prompt("your guess was wrong. please try again");
    // }
    
} 