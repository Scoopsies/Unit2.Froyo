const input = window.prompt("Welcome to cone 'lickin, what ice cream you pickin", "vanilla,vanilla,vanilla,strawberry,coffee,coffee" );
const arr = input.split(",");
console.log(arr)
let obj = {};


for (let i = 0; i < arr.length; i++){
    let loop = arr[i];
    if (obj[loop] === undefined){
        obj[loop] = 0;
    }
    obj[loop]++
}

console.log(obj)