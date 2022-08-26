const family={
    name:"Divya",
    age:20,
    qual:"graduation",
    city:"Pune"

}
const family1={
    name:"somu",
    age:17,
    qual:"12",
    city:"Punjab"
}
const family2={
    name:"tannu",
    age:14,
    qual:12,
    city:"Haryana"
}
const family3={
    name:"sourbh",
    age:12,
    qual:9,
    city:"Delhi"
}
function  feature(){
    console.log(`Hello guy's,I am ${this.name}.\nI am ${this.age} years old.\nI am doing ${this.qual}.\nI live in ${this.city}.\n`)
}
let intro=feature.bind(family);
intro();

let intro1=feature.bind(family1);
intro1();

let intro2=feature.bind(family2);
intro2();

let intro3=feature.bind(family3);
intro3();