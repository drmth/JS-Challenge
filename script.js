const bernardInfo = {
    weight: 95,
    height: 188
}
const marcelInfo = {
    weight: 85,
    height: 188
}

let bernardHigherIMC;
const bernardIMC = calculIMC(bernardInfo);
const marcelIMC = calculIMC(marcelInfo);
comparePeople();

function calculIMC(peopleInfoArray) {
    return peopleInfoArray.weight / (peopleInfoArray.height ^ 2);
}

function comparePeople() {
    return bernardIMC > marcelIMC ? bernardHigherIMC = true : bernardHigherIMC = false;
}

console.log(bernardIMC);
console.log(marcelIMC);
console.log(bernardHigherIMC);