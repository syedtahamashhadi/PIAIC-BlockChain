let US_Dollars = 10 ;
let Saudi_Riyal = 25 ;

function getTotalPKR(){
    return (US_Dollars*152) + (Saudi_Riyal*25);
}

pkrText = document.createTextNode(getTotalPKR());
document.getElementById("pkr").appendChild(pkrText);