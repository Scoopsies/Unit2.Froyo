const input = window.prompt("Welcome to cone 'lickin, what ice cream you pickin", "vanilla,vanilla,vanilla,strawberry,coffee,coffee" );
const flavArr = input.split(",");
console.log(flavArr)
let flavObj = {};


for (let i = 0; i < flavArr.length; i++){
    let loopArr = flavArr[i];
    if (flavObj[loopArr] === undefined){
        flavObj[loopArr] = 0;
    }
    flavObj[loopArr]++
}

console.log(flavObj)