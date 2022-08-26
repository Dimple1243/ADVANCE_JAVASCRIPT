const interviewquestion=(name)=>{
    if(name==="Divya"){
        return function(topic){
            console.log(`Hi ${name}!what is ${topic}?.Plz explain us.`);
        }
    }
    if(name==="Ankita"){
        return function(topic){
            console.log(`Hi ${name}!what is ${topic}?.Plz explain us.`);
        }
    } 
    if(name==="Anjali"){
        return function(topic){
            console.log(`Hi ${name}!what is ${topic}?.Plz explain us.`);
        }
    }
    else{
        return function(){
            console.log(`Hi ${name}!what is ${topic}?.Plz explain us.`);
        }
    }

}
const cand1=interviewquestion('Divya')
const cand2=interviewquestion('Ankita')
const cand3=interviewquestion('Anjali')
cand1('JS')
cand2('Python')
cand3('DBMS')
