const studentArr =  ["Michael" , "John" , "Tony"] ;
const scoreArr = [320 , 230 , 480];




for (let index = 0; index < scoreArr.length; index++) {
    
    let student = studentArr[index];
    let score = scoreArr[index];

    let percentage = (score/500) * 100 + "%" ; 

    let el = document.createElement("h2");
    el.innerHTML = "Score of " + student + " is " + score + ". Percentage: " + percentage;
    document.body.appendChild(el);
    
}

