// async function test(){
//     console.log("2 message");
//     await console.log("3 message");
//     console.log("4 message");


// }
// console.log("1 message");
// test()
// console.log("5 message");

// Async- await approach


// async function displayCommits() {
//     try {
//       const user = await getUser(1);
//       const repos = await getRepositories(user.githubUsername);
//       const commits = await getCommits(repos[0]);
//       console.log(commits);
//     } catch (err) {
//       console.log("Error: ", err.message);
//     }
//   }
  
// displayCommits();

// async function f(){
//     console.log("Asyncronous");
//     return Promise.resolve(1);
// }
// f()

// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }

// f().then(function(result) {
//     console.log(result)
// });


// a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// async function
// async function asyncFunc() {
//     try {
        // wait until the promise resolves 
//         let result = await promise; 

//         console.log(result);
//     }   
//     catch(error) {
//         console.log(error);
//     }
// }

// calling the async function
// asyncFunc(); 

b=require("readline-sync");
a=b.questionInt("enter the num ")
let promise=new Promise(function(resolve,reject){
    if (a%2===0){
        resolve("even");
    }
    else{
        reject("odd");
    }
});
async function asyncFunc(){
    try{
        let result=await promise
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Hurray!! ")   
    }
}
asyncFunc();


// const obj1=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 let roll_no=[1,2,3,4,5]
//                 resolve(roll_no)
//         });
//         const getBiodata=(indexdata)=>{
//                 let biodata={
//                         name:"Divya",
//                         age:20
//                 }
//                 resolve(`my name is ${biodata.name} and i am ${biodata.age} years old `)
//         },2000,indexdata)

// })




