var orignalNo = 8 ;

let guessNo = prompt('Guess a no from 0-10');


if (Number(guessNo) == orignalNo){
    text = document.createTextNode('Bingo! Correct Answer');
}else if(Number(guessNo) +1 == orignalNo){
    text = document.createTextNode('Close enough to correct answer');
}

document.getElementById('guess').appendChild(text);