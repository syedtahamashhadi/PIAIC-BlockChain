let city = prompt('Enter your city name...')

if (city.toLowerCase() == "karachi"){
    text = document.createTextNode("Welcome to city of lights");
    document.getElementById("greet").appendChild(text);
}