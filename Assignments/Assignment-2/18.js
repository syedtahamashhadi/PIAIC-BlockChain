let time = prompt("Enter your time in 24 hrs format...");

let msg ;

if (time >= 0000 && time < 1200) {
    msg = "Good morning!";
}else if (time >= 1200 && time < 1700){
    msg = "Good afternoon!";

}else if (time >= 1700 && time < 2100){
    msg = "Good evening!";

}else if (time >= 2100 && time <=2359){
    msg = "Good night!";

}

document.getElementById('msg').innerHTML = msg ;