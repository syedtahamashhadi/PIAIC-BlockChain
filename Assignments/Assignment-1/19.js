var birthYear = 1996;

var text = document.createTextNode(birthYear);

document.getElementById("p1").appendChild(text);



var dataType= typeof(birthYear);

var text = document.createTextNode(dataType);

document.getElementById("p2").appendChild(text);