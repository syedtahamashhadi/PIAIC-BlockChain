var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"] ;
var o = ["th","st","nd","rd"] ;


for (let index = 0; index < aCities.length; index++) {
    
    const city = aCities[index] ;

    let el = document.createElement('h2');
    el.innerHTML = aCities.indexOf(city)+1 + getChar(aCities.indexOf(city)) + " choice is " + city ;
    document.body.appendChild(el) ;
    
}

function getChar(arrIndex){
    let char = ' ';
    
    if (arrIndex == 0) {
        char = o[1] ;
    }else if (arrIndex == 1){
        char = o[2] ;
    }else if(arrIndex == 2){
        char = o[3] ;
    }else{
        char = o[0]
    }
    
    return char;
  
}
