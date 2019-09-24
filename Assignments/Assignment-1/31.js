var totalMarks = 50;
var obtainedMarks = 32;

function getPercentage(total,current){
    return (current / total) * 100 ;
}

tMarksText = document.createTextNode(totalMarks);
document.getElementById("tMarks").appendChild(tMarksText);

oMarksText = document.createTextNode(obtainedMarks);
document.getElementById("oMarks").appendChild(oMarksText);

prcntText = document.createTextNode(getPercentage(totalMarks,obtainedMarks));
document.getElementById("prcnt").appendChild(prcntText);