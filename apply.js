// const student={
//     name:"Divya",
//     age:21,
//     feature:function(rating){
//         console.log(`hello i am ${this.name} i am ${this.age} years old. i would like to give ${rating} star`)
//     }
// }
// student.feature([5])

// const student2={
//     name:"Anjali",
//     age:21,

// }
// // student.feature.apply(student2,[5]);


let arrmax=Math.max.apply(null,[1,2,3,4,5,6]);
console.log(arrmax)