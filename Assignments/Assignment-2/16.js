const pswd = 'abc123'

let givenPswd = prompt ("Enter your password...");

let msg ;

if (!givenPswd){
    msg = "Please Enter a password";
}else if (givenPswd == pswd){
    msg = "Correct! The password you entered matches with orignal password"
}else {
    msg = "Inccorect password";
}


document.getElementById('msg').innerHTML = msg ;