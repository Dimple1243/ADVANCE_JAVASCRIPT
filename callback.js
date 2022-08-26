// function one(){
//     setTimeout(function(){
//         console.log('function 1 ')
//         two()
//     },3000)
    
// }
// function two(){
//     console.log('function 2 ')
// }
// one()

// function person(friend,person2){
//     setTimeout(function(){
//         console.log('my friends name is '+friend);
//         person2()},3000)
// }
// function person2(){
//     console.log('my name is divya ')

// }
// person("Aalu",person2)

// function greet(name,callback){
//     console.log('hiii'+" "+name);
//     callback()
// }
// function callme(){
//     console.log('hii i am callback function')
// }
// greet("divya",callme)

// function name(){
//     console.log("hii i am developer")
// }
// function name1(){
//     console.log('i like programming')
// }
// setTimeout(name,3000)
// name1(2)

// function greet(){
//     console.log('hey! how are u ?');
// }
// setInterval(greet,1000)

// function showTime() {

//     let dateTime= new Date();

//     let time = dateTime.toLocaleTimeString();

//     console.log(time)
// }

// let display = setInterval(showTime, 1000);
// let id=clearTimeout(display)
// showTime(id)


let count = 0;

// function creation
let interval = setInterval(function(){

    // increasing the count by 1
    count += 1;

    // when count equals to 5, stop the function
    if(count === 5){
        clearInterval(interval);
    }

    // display the current time
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);

}, 1000);