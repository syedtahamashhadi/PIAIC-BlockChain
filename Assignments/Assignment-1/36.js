var favSnack = "Lays";

var cAge = 23;

var maxAge = 82;

var perDay = 2;


function getSupply(currentAge,maxAge,perDay){
    let days = (maxAge-currentAge) * 365
    supply = days * perDay;
    return supply;
}

var fSnackText = document.createTextNode(favSnack);
document.getElementById("fSnack").appendChild(fSnackText);

var cAgeText = document.createTextNode(cAge);
document.getElementById("cAge").appendChild(cAgeText);

var mAgeText = document.createTextNode(maxAge);
document.getElementById("mAge").appendChild(mAgeText);

var sDayText = document.createTextNode(perDay);
document.getElementById("sDay").appendChild(sDayText);

var tSnackText = document.createTextNode(getSupply(cAge,maxAge,perDay));
document.getElementById("tSnack").appendChild(tSnackText);

var mAgeText = document.createTextNode(maxAge);
document.getElementById("mAge2").appendChild(mAgeText);