let myResume = {
    name:"Evanjalin",
    gender:"Female",
    email:"evanjalin@gmail.com",
    
    education:{BSc:"Computer_Science", 
               MSc:"Criminology"
   },
    professionalExperience:{ 
               designation: "Gsoc_Analyst",
               company:"Rubrik"
    },
    skills:["Access_control_management" , "Travel_Security"],
    hobbies:[ "Dancing", "Games"]
}
for (let keys of Object.keys(myResume)){
console.log(keys,myResume[keys])
}
