var a = [10,20,4,40,60,70] ;
var b = [1,2,3,4,5,6,7,8,9,10] ;

let unionArr = b.concat(a) ;

let uniqueArr = [...new Set(unionArr)] ;

let el = document.createElement('h2') ;
el.innerHTML = uniqueArr ;
document.body.appendChild(el) ;