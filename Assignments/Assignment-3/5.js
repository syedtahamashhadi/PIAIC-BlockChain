var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

var uniqueArr1 = [...new Set(arr1)] ;

document.getElementById('arr').innerHTML = arr1 ;

document.getElementById('uniqueArr').innerHTML = uniqueArr1 ;
