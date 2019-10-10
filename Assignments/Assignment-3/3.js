let color = ["red" , "green" , "blue"] ;

/****************** A ************************/

let userColor = prompt ("Enter a color you want to add to the begining");

color.unshift(userColor);

document.getElementById('msg1').innerHTML = "A : " + color;


/****************** B ************************/

userColor2 = prompt ("Enter a color you want to add to the end");

color.push(userColor2);

document.getElementById('msg2').innerHTML = "B : " + color;


/****************** C ************************/

color.unshift('white','grey');

document.getElementById('msg3').innerHTML = "C : " + color;


/****************** D ************************/

color.shift();

document.getElementById('msg4').innerHTML = "D : " + color;


/****************** E ************************/

color.pop();

document.getElementById('msg5').innerHTML = "E : " + color;


/****************** F ************************/

let userIndex1 = prompt ("Enter a index to where you want to enter a color");

userColor3 = prompt ("Enter a a color you want to add at index "+userIndex1);


color.splice(userIndex1,0,userColor3);

document.getElementById('msg6').innerHTML = "F : " + color;


/****************** G ************************/

let userIndex2 = prompt ("Enter a index to where you want to dalete a color");

userColor4 = prompt ("How many colors you want to delete from index "+userIndex2);


color.splice(userIndex2,userColor4);

document.getElementById('msg7').innerHTML = "G : " + color;
