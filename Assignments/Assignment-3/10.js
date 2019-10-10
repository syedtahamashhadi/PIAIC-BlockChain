var A = [20,53,78,4,91,12] ;

function numberAs(a,b){
    return a-b ;
}

document.getElementById('uArr').innerHTML = A ;

document.getElementById('sArr').innerHTML = A.sort(numberAs) ;
