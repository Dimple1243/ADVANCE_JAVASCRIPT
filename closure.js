// const outerfunc=(a)=>{
//     let b=10
//     const innerfunc=()=>{
//         let sum=a+b
//         console.log(`the sum of two num is ${sum}`)
//     }
//     innerfunc()
// }
// outerfunc(5)

var x=10
function outer(){
    let count=0
    return function(){
        count++
        console.log(count)
    }
}
const count=outer();
count();
count()


