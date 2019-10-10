const citiesArr = ['Karachi' , 'Lahore' , 'Islamabad' , 'Quetta' , 'Peshawar'] ; 

let selectedCitiesArr = [citiesArr[0],citiesArr[2],citiesArr[4]] ;

document.getElementById('cities').innerHTML = citiesArr;

document.getElementById('favCities').innerHTML = selectedCitiesArr;