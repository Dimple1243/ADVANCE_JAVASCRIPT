// function mul(a,b){
//     b=(typeof b!=="undefined")? b:2
//     return a*b
// }
// console.log(mul(6))


let mul=(a,b=4) =>{
    console.log(`the multiply of two number is ${a*b}`);
}
mul(4)