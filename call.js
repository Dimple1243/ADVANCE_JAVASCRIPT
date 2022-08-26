const student={
    name:"Divya",
    age:21,
    feature:function(rating){
        console.log(`hello i am ${this.name} i am ${this.age} years old. i would like to give ${rating} star`)
    }
}
// student.feature(5)

const student2={
    name:"Anjali",
    age:21,

}
student.feature.call(student2,5);