let firstNo = prompt ("Enter first no");
let secondNo = prompt ("Enter second no");
let operation = prompt ("Enter operation");

let result;

if (operation == "+"){
    result = Number(firstNo) + Number(secondNo);
}else if (operation == "-"){
    result = Number(firstNo) - Number(secondNo);
}else if (operation == "*"){
    result = Number(firstNo) * Number(secondNo);
}else if (operation == "/"){
    result = Number(firstNo) / Number(secondNo);
}else if (operation == "%"){
    result = Number(firstNo) % Number(secondNo);
}

text = document.createTextNode(result);
document.getElementById('msg').appendChild(text);