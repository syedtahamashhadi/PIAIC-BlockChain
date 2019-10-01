let no = prompt("Enter a number ....");


if(Number(no)%3 == 0){
    text = document.createTextNode("Give number is divisible by 3");
}else{
    text = document.createTextNode("Given number is not divisible by 3");
}

document.getElementById('msg').appendChild(text)