// function value(...arr){
//     // console.log(arr)
//     sum=0
//     for(i of arr){
//         sum+=i
//     }
//     console.log(sum)
// }
// value(1,2,3,4,5,6,7,8)


// function value(...arr){
//     console.log(...arr)
// }
// value(1,2,3,4,5,6,7,8)


// function value(a,b,...c){
//     console.log(`${a} ${b}`)
//     console.log(c)
//     console.log(c[0])
//     console.log(c.length)
//     console.log(c.indexOf('alima'))

// }
// value("saloni","dimple","anjali","ankita","alima");


function add(number) {
    if (number <= 0) {
      return 0;
    } else {
      return number + add(number - 1);
    }
  }
add(3)
