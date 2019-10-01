let marks1 = prompt("Enter your marks of Math");
let marks2 = prompt("Enter your marks English");
let marks3 = prompt("Enter your marks Science");
let tmarks = prompt("Total marks ");

let marks = Number(marks1)+Number(marks2)+Number(marks3);

function getPrcnt(marks,tmarks){
    prcntg = (marks/tmarks) * 100;
    return prcntg.toFixed(2);
}

function getGrade(){
    let grade = '';
    if(getPrcnt(marks,tmarks) > 80){
        grade = 'A-one'
    }else if(getPrcnt(marks,tmarks) >= 70){
        grade = 'A'
    }else if(getPrcnt(marks,tmarks) >= 60){
        grade = 'B'
    }else{
        grade = 'Fail'
    }
    return grade  ;
}

function getRemarks(){

    let remarks = '';

    if(getPrcnt(marks,tmarks) > 80){
        remarks = 'Excellent'
    }else if(getPrcnt(marks,tmarks) >= 70){
        remarks = 'Good'
    }else if(getPrcnt(marks,tmarks) >= 60){
        remarks = 'You need to improve'
    }else{
        remarks = 'Sorry'
    }

    return remarks  ;
}

tmarksText = document.createTextNode(tmarks);
document.getElementById('tmarks').appendChild(tmarksText)

marksoText = document.createTextNode(marks);
document.getElementById('markso').appendChild(marksoText)

prcntText = document.createTextNode(getPrcnt(marks,tmarks) + '%');
document.getElementById('prcnt').appendChild(prcntText)

gradeText = document.createTextNode(getGrade());
document.getElementById('grade').appendChild(gradeText);

remarksText = document.createTextNode(getRemarks());
document.getElementById('remarks').appendChild(remarksText);