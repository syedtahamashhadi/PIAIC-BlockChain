const qualificationArr = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.' , 'PhD'] ;

for (let index = 0; index < qualificationArr.length; index++) {
    
    let qualification = qualificationArr[index];

    let el = document.createElement("h2");
    el.innerHTML = qualificationArr.indexOf(qualification) +1 + ") "+ qualification;
    document.body.appendChild(el);
    
}