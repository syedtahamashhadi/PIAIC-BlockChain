let gender = prompt ("Enter your Gender...");


if (gender.toLowerCase() == 'male') {
    text = document.createTextNode('Good Morning Sir');
    document.getElementById('greet').appendChild(text)
}else if (gender.toLowerCase() == 'female'){
    text = document.createTextNode("Good Morning Ma'am");
    document.getElementById('greet').appendChild(text)
}else{
    alert('kindly enter your gender')
}