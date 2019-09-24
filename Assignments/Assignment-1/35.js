var radius=28;

function getCircumference(r){
    return 2 * (3.142) * r ;
}

function getArea(r){
    return 3.142 * (r**2);
}


radText= document.createTextNode(radius);
document.getElementById("rad").appendChild(radText);

cirfText= document.createTextNode(getCircumference(radius));
document.getElementById("cirf").appendChild(cirfText);

areaText= document.createTextNode(getArea(radius));
document.getElementById("area").appendChild(areaText);
