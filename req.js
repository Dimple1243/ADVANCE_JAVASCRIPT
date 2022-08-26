const { read } = require("fs");

userinput=require("readline-sync")
axioss=require("axios")
fs=require("fs");
url=axioss.get("https://api.merakilearn.org/courses").then(resp=>
{
  link=resp.data
  fs.writeFileSync("course.json",JSON.stringify(link,null,4))
  read=readFileSync("course.json");
  read=JSON.parse(read)
  serialNumber=1
  for(i of read){
      console.log(serialNumber,i["name"])
      serialNumber++
  }
  courseNumber=userinput.questionInt("Enter the coursenumber: ")
  console.log("\n");
  console.log(read[courseNumber-1]["name"],read[courseNumber-1]["id"],"\n");
  coursename=read[courseNumber-1]["name"]
  url1=axioss.get("https://api.merakilearn.org/courses/"+id+"/exercises")
  .then(ressolve=>{
    link1=ressolve.data
    console.log(link1)
  })

});
