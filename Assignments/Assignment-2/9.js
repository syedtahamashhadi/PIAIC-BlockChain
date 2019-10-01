let no = prompt('Enter a number..');

if (Number(no)%2 == 0) {
    text = document.createTextNode("Given number is even");
} else {
    text = document.createTextNode("Given number is odd");
}


document.getElementById("msg").appendChild(text);