
/*Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
Уноси се колико пице поједете на месечном нивоу, и колико година имате 
(Рачуна се да је довољно достављати до стоте године) */




function lifeSupply(numPerMonth,age){
 
    let oneYearpizza=numPerMonth*12;
    let lifelong=(100-age);
    return (`${oneYearpizza*lifelong}`)
}
console.log(lifeSupply(12,29)) 


