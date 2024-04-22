let myResume = {
    name:"Evanjalin",
    gender:"Female",
    email:"evanjalin@gmail.com",
    
    education:{BSc:"Computer_Science", MSc:"Criminology"
   },
    professionalExperience:{ 
        designation: "Gsoc_Analyst", company:"Rubrik"
    },
    skills:["Access_control_management" , "Travel_Security"],
    hobbies:[ "Dancing", "Games"]
}
let iteration = myResume;
for (let i =0; i < iteration.length; i++){
    iteration = iteration[i];
}
console.log(iteration);