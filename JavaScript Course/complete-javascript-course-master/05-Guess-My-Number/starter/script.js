'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

//Add Event Listerner to check button
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //No Input
    if(!guess){
        // document.querySelector('.message').textContent='⛔ No Number!';
        displayMessage('⛔ No Number!');
    }
    //when wins
    else if(guess===secretNumber){
        // document.querySelector('.message').textContent='Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }else{
            document.querySelector('.highscore').textContent=highScore;
        }
    }//When Guess is wrong
    else if(guess!==secretNumber){
        if(score>1){
            // document.querySelector('.message').textContent=
            // guess>secretNumber?'Too High!':'Too Low!';
            //used ternery operator in above line
            displayMessage(guess>secretNumber?'Too High!':'Too Low!');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            // document.querySelector('.message').textContent='😢You Lost Game';
            displayMessage('😢You Lost Game');
            document.querySelector('.score').textContent=0;
        }
    }
    // //When input is high
    // else if(guess>secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='Too High!';
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }else{
    //         document.querySelector('.message').textContent='😢You Lost Game';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
    // //When input is low
    // else if(guess<secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }else{
    //         document.querySelector('.message').textContent='😢You Lost Game';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
});
//Add Event Listerner to again button
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent='Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})