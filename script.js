

// const number = [0,1,2,3,4,5,6,7,8,9,10,"A","B","C","D","E","F","G","J","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// function numberSystem(number){
//     number.map(num => {
//         for(let i=0; i<number.length; i++){
//             const binary = `${num}${i}`
//             console.log(binary)
//         };
//     });
// };

// numberSystem(number);



// let zero = "*";
// let one = "+";

// for(let i=0; i<=10; i++){
//     let string = i.toString(2);
//     let result = "";
//     for(char of string){
//         if(char === "0"){
//             result += zero
//         }else{
//             result += one
//         }
//     }
    
//     console.log(result)

// }


for(let i=0; i<=10; i++){
    let number = i.toString(2)
    console.log(number)
}


const enterBtn = document.querySelector(".btn");
const enter = document.querySelector('.enter');
const count = document.querySelector(".count");
const binary = document.querySelector(".binary-form");
const outputSec = document.querySelector('.output-section');

enterBtn.addEventListener('click',() => {
    const text = count.value;
    const symbol = enter.value;
    binary.classList.add('active')
    for(let i=0; i<=text; i++){
        const binaryNumber = i.toString(2);
        let result = "";

        for(char of binaryNumber){
            if(symbol === "+"){
                if(char === "0"){
                    result += symbol;
                }else{
                    result +=char;
                }
            }else if(symbol === "#"){
                if(char === "1"){
                    result += symbol;
                }else{
                    result += char;
                }
            }
        }
        console.log(result)
        const symbolArray = [...result];
        console.log(...symbolArray)
       
        const output = document.createElement("div");
        output.classList.add("output-content")

        output.innerHTML = result;
        outputSec.appendChild(output);

    }
})

enterBtn.addEventListener('click' , () => {
    const countNum = count.value;

    for (i=0; i<countNum; i++){
        const result = i.toString(2);
        console.log(result)
    }
})
