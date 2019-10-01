let color = prompt ('Enter traffic signal color ..');

if (color.toLowerCase() == 'red') {
    text = document.createTextNode('Must stop')
    document.getElementById("insttruction").appendChild(text)
}else if (color.toLowerCase() == 'yellow') {
    text = document.createTextNode('Ready to move')
    document.getElementById("insttruction").appendChild(text)
}else if (color.toLowerCase() == 'green') {
    text = document.createTextNode('Move now')
    document.getElementById("insttruction").appendChild(text)
}else{
    alert('Kindly enter valid color')
}