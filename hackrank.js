// function catAndMouse(x, y, z) {
// cat and mouse
//     let A = Math.abs(z - x);
//     let B = Math.abs(z - y);
//     if (A < B) {
//         return "Cat A";
//     } else if (B < A) {
//         return "Cat B";
//     } else {
//         return "Mouse C";
//     }
// }

//plus minus
// function plusMinus(arr) {
//     var sum=0
//     var max=0
//     var zero=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             sum++
//         }else if(arr[i]<0){
//             max++
//         }else{
//             zero++
//         }   
//     }
//     console.log((sum/arr.length).toFixed(6))
//     console.log((max/arr.length).toFixed(6))
//     console.log((zero/arr.length).toFixed(6))
    
//     }
// plusMinus([1,1,0,-1,-1])

//birthday cake

function birthdayCakeCandles(candles){
    var max_candles = Math.max(...candles) 
    var number_candles = 0
    for(var i=0; i<candles.length; i++){
        if(candles[i] == max_candles){
            number_candles = number_candles + 1   
        }
    }
    return number_candles;
}
console.log(birthdayCakeCandles([4,4,1,3]))