var d =new Date();

let currentYear = d.getFullYear();

var birthYear = 1996 ;

function getAge(currentYear,birthYear){
    return currentYear - birthYear ;
}


var cYearText = document.createTextNode(currentYear);
document.getElementById("cYear").appendChild(cYearText);


var bYearText = document.createTextNode(birthYear);
document.getElementById("bYear").appendChild(bYearText);


var ageText = document.createTextNode(getAge(currentYear,birthYear));
document.getElementById("age").appendChild(ageText);


