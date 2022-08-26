// string="/1javascript#$ is a programming/*&4 language@/"
//o/p javascript is programing language

// const n=require("readline-sync")
// let chr=n.question("enter the character ")
// let store=chr
// let string=""
// for(let i=chr.length-1;i>=0;i--){
//     string=string+chr[i]
// }
// if (store==string){
//     console.log("palindrome")
// }
// else{
//     console.log("not palindrome")
// }

// string=require("readline-sync");
// num=string.questionInt("enter the num ")
// b=[]
// for(let i=1;i<num;i++){
//     if(i%3==0&&i%5==0){
//         b.push("FuzzBuzz")
//     }
//     if(i%5==0){
//         b.push("Fuzz")
//     }
//     if(i%3==0){
//         b.push("Buzz")
//     }
//     else{
//         b.push(i)
//     }
// }
// console.log(b);


function singleNumber (A){
    unique=[]
    duplicate=[]
    for(i of A){
        if(!unique.includes(i)){
            unique.push(i)
        }
    }
    for(j of unique){
        count=0
        for(k of A){
            if(j===k){
                count++
            }
        }
        if(count>1){
            duplicate.push(j)
        }
    }
}
singleNumber([1, 2, 2, 3, 1])
console.log(duplicate);


// var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// unique=[]
// duplicate=[]
// for(i of n){
//     if(!unique.includes(i)){
//         unique.push(i)
//     }
// }
// for(j of unique){
//     count=0
//     for(k of n){
//         if(j===k){
//             count++
//         }
//     }
//     if(count>1){
//         duplicate.push(j)
//     }
// }
// console.log(duplicate)

