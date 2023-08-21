const userInput = window.prompt("What flavors of Froyo do you want?", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")

//does what .split(",") does, but i wanted to see if i could recreate it myself.
function splitter(string){
    let array = [];
    let str = "";
    for (i = 0; i < string.length; i++){
        if (string[i] !== ","){
            str += string[i];
        }
        if (string[i] === ","){
            array.push(str);
            str = '';
        }
        if (i === string.length - 1){
            array.push(str)
        }
        
    }
    return array;
}

const strArray = splitter(userInput);


//Creates an object that adds up each unique array item.

function flavorObj(strArray){
    const order = {};
    for (i = 0; i < strArray.length; i++){
        
      let iteration = strArray[i]  

      if (order[iteration] === undefined){
        order[iteration] = 1;
      } else {
        order[iteration] += 1;
      }
    }
    return order;
}

console.log(flavorObj(strArray))



