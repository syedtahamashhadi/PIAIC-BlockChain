var item1P=280;
var item1Q=4;

var total1=item1P*item1Q;

var item1PText = document.createTextNode(item1P);
document.getElementById("itm1").appendChild(item1PText);

var item1QText = document.createTextNode(item1Q);
document.getElementById("qty1").appendChild(item1QText)


var item2P=220;
var item2Q=2;

var total2=item2P*item2Q;

var item2PText = document.createTextNode(item2P);
document.getElementById("itm2").appendChild(item2PText);

var item2QText = document.createTextNode(item2Q);
document.getElementById("qty2").appendChild(item2QText)


var sCharges =600;

var sChargesText = document.createTextNode(sCharges);
document.getElementById("sCharges").appendChild(sChargesText);

var cost = total1+total2+sCharges;

var costText = document.createTextNode(cost);
document.getElementById("cost").appendChild(costText)