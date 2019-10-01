let char = prompt ('Enter Number or Alpabet in upper or lower case ...');


let msg ;
let ascii = char.charCodeAt(0);

if (ascii >= 65 && ascii <= 90) {
    msg = "Given input is uppercase letter"
}else if (ascii >= 97 && ascii <= 122) {
    msg = "Given input is lowercase letter"
}else if (ascii >= 48 && ascii <= 57) {
    msg = "Given input is number"
}


text = document.createTextNode(msg);
document.getElementById('msg').appendChild(text);