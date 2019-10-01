let no1 = prompt("Enter first Number..");
let no2 = prompt("Enter second Number..");


let msg;

if (Number(no1) == Number(no2)){
    msg = "Both numbers are equal";
}else if (Number(no1) > Number(no2)){
    msg = "first number is greater than second number";
}else{
    msg = "second number is greater than first number";
}

text = document.createTextNode(msg);
document.getElementById("msg").appendChild(text);
