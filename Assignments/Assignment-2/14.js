let no1 = prompt("Enter first Number..");

let msg;

if (Number(no1) == 0){
    msg = "Given number is zero";
}else if (Number(no1) > 0){
    msg = "Given number is positive";
}else{
    msg = "Given number is negative";
}

text = document.createTextNode(msg);
document.getElementById("msg").appendChild(text);
