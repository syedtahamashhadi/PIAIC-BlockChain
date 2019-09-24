var val;

valText = document.createTextNode(val);
document.getElementById("uVar").appendChild(valText);


val = 5;

valText = document.createTextNode(val);
document.getElementById("dVar").appendChild(valText);


incVal=val+1;

incText = document.createTextNode(incVal);
document.getElementById("inc").appendChild(incText);


addVal = incVal + 7;

addText = document.createTextNode(addVal);
document.getElementById("add").appendChild(addText);


decVal = addVal - 1;

decText = document.createTextNode(decVal);
document.getElementById("dec").appendChild(decText);


remVal = decVal % 3;

remText = document.createTextNode(remVal);
document.getElementById("rem").appendChild(remText);