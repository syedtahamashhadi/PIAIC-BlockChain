/********************* a **********************/ 

let numbers = [] ;

for (let index = 1; index < 16; index++) {
   
    const number = index;

    numbers.push(number);
  
}


document.getElementById('count').innerHTML = numbers ;


/********************* b **********************/ 

let reverseNumbers = [] ;

for (let index = 10; index > 0; index--) {
   
    const number = index;

    reverseNumbers.push(number);
  
}


document.getElementById('reverseCount').innerHTML = reverseNumbers ;


/********************* c **********************/ 

let evenNumbers = [] ;

for (let index = 0; index < 21; index++) {

    (index%2 == 0) ? evenNumbers.push(index) : false ;
    
}


document.getElementById('even').innerHTML = evenNumbers ;



/********************* d **********************/ 

let oddNumbers = [] ;

for (let index = 0; index < 21; index++) {

    (index%2 !== 0) ? oddNumbers.push(index) : false ;
    
}


document.getElementById('odd').innerHTML = oddNumbers ;


/********************* e **********************/ 

let seriesNumbers = [] ;

for (let index = 2; index < 21; index++) {

    (index%2 == 0) ? seriesNumbers.push(index + "k") : false ;
    
}


document.getElementById('series').innerHTML =seriesNumbers ;
