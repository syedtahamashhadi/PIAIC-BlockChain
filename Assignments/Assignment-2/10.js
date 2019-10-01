let temp = prompt("Enter Temprature...");

let msg ;

if (Number(temp) > 40) {
    msg = "It is too hot outside"
} else if (Number(temp) > 30) {
    msg = "The weather today is normal"
} else if (Number(temp) >  20){
    msg = "Today weather is cool"
}else if (Number(temp) > 10){
    msg = "OMG! Today's weather is so Cool"
}


text = document.createTextNode(msg)
document.getElementById('msg').appendChild(text);