const bernardInfo = {
    weight: 95,
    height: 188
}
const marcelInfo = {
    weight: 85,
    height: 188
}

const bernardIMC = calculIMC(bernardInfo);
const marcelIMC = calculIMC(marcelInfo);
let bernardHigherIMC = hasMarcelHigherIMC();

function calculIMC(peopleInfoArray) {
    return peopleInfoArray.weight / (peopleInfoArray.height ^ 2);
}

function hasMarcelHigherIMC() {
    return bernardIMC > marcelIMC;
}

console.log(bernardIMC);
console.log(marcelIMC);
console.log(bernardHigherIMC);