let char = prompt("Enter a single alphabet...");

const vowelArr = ['A','a','E','e','I','i','O','o','U','u'];

let msg ;

if (vowelArr.includes(char)) {
    msg = char + " is vowel...";
}else{
    msg = char + " is not vowel...";
}

document.getElementById('msg').innerHTML = msg;