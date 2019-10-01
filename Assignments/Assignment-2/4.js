let fuel = prompt ('Enter your available fuel ...');

if (fuel < 0.25){

    text = document.createTextNode('Please refill the fuel in your car');
    document.getElementById('fuel').appendChild(text);

}