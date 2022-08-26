// function sum(a,b,c){
//     console.log(a,b,c);
// }
// var arval=[5,2,3]
// sum.apply(null,arval)


// function sum(a,b,c){
//     // console.log(a,b,c);
// }
// var arval=[5,2,3]
// sum.apply(...arval)
// // sum.apply(null,arval)


// let obj1 = {x:'Hello', y:'Bye'};
// let clonedObj1 = {...obj1}; // Spreads and clones obj1
// console.log(obj1);

// let array1 = [3, 4, 5, 6];
// let clonedArray1 = [...array1];
// // Spreads the array into 3,4,5,6
// console.log(clonedArray1);

// let obj2 = {z:'Yes', a:'No'};
// let mergedObj = {...obj1, ...obj2}; // Spreads both the objects and merges it
// console.log(mergedObj);


// // for merging list
// let a=[1,2,3]
// let b=[4,5,6]
// let c=[7,8,9]
// let d=[...a,...b,...c]
// console.log(d)

const sum=()=>{
    let a=5
    let b=8
    return a+b
}
console.log(sum())