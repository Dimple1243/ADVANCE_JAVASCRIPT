// const count = true;

const { resolve } = require("path");

// let countValue = new Promise(function (resolve, reject) {
//      if (count) {
//         resolve("There is a count value.");
//     } else {
//          reject("There is no count value");
//      }
//  });

//  console.log(countValue);

// var promise = new Promise(function(resolve, reject) {
//     const x = 8;
//     const y =4;
//     if(x<y){
//         resolve();
//     }else if(x>y){
//         reject();
//     }else{
//         reject();
//     }
// });
// promise.
//     then(function(){
//         console.log("ok");
//     }).
//     catch(function(){
//          console.log("oo no");
//      });

// const a=require("readline-sync");
// const b=a.questionInt("enter the num ")
// var promise=new Promise(function(reject,resolve){
//     if(b%2===0){
//         resolve("even");
//     }
//     else{
//         reject("odd");
//     }

// })
// .then((error)=>{
//     console.log(error)
// })
// .catch((H)=>{
//     console.log(H)
// })





// const pobj1=new Promise((resolve,reject) =>{

//     setTimeout(() =>{
//         let students_name=["Anjali","Saloni","Aayushi"]
//         // resolve(students_name);
//         reject("Error while communcating ")
//     },1000);
// // ...promise consume
// });
// pobj1.then((name)=>{
//     console.log(name)

// })
// pobj1.catch((error)=>{
//     console.log(error)
// })


// function getUser(id, callback) {
//     setTimeout(() => {
//       callback({id: id, githubUsername: 'jerrycode06'});

//     //   callback({id: id, githubUsername: 'jerrycode06'});
//     }, 2000);
//     console.log("Reading an user from database...");
//   }  
//   getUser(1, (user) => {
//     console.log("User", user);
// })
  

// const obj1={name:"Divya",
//             age:20};
// let promise=new Promise((resolve,reject)=>{
//     if(obj1.hasOwnProperty("name")){
//         resolve("exist")
//     }
//     else{
//         reject("not exist")
//     }

// });
// promise.then((resolv)=>{
//     console.log("true");

// }).catch((rej)=>{
//     console.log("false");
// });