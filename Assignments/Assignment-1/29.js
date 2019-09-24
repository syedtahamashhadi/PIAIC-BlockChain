var tempC = 28;

var tempF = 86;

function getCelciusIntoFarenhiet(temp){
    return (temp * 9 / 5) +32; 
}

function getFarenhietIntoCelcius(temp){
    return (temp - 32 ) * 5 / 9 ;
}


var fText= document.createTextNode(getCelciusIntoFarenhiet(tempC));
document.getElementById("tempF").appendChild(fText);


var cText= document.createTextNode(getFarenhietIntoCelcius(tempF));
document.getElementById("tempC").appendChild(cText);


