function getTicketPrice(tickets,cost){
    return tickets * cost
}

var totalCost= getTicketPrice(6,450);

var text = document.createTextNode(totalCost);

document.getElementById("price").appendChild(text);