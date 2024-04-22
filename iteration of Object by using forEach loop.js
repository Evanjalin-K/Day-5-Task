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
Object.keys(myResume).forEach(key => {
    console.log(key,myResume[key]) 
});

