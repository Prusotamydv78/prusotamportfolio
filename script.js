let skills = document.getElementById("skills")
let experience = document.getElementById("experience")
let education = document.getElementById("education")
// console.log(skills,experience,education);
let tab1 = document.getElementsByClassName("tab-contents")[0]
let tab2 = document.getElementsByClassName("tab-contents")[1]
let tab3 = document.getElementsByClassName("tab-contents")[2]

skills.addEventListener("click",()=>{
    
    tab1.classList.toggle("active-tab")
    skills.classList.toggle("active-links")
    if(skills.classList.contains("active-links")==true){
       experience.classList.remove("active-links")
       education.classList.remove("active-links")
    }
    if(tab1.classList.contains("active-tab")==true){
        tab2.classList.remove("active-tab")
        tab3.classList.remove("active-tab")
    }
})
experience.addEventListener("click",()=>{
    tab2.classList.toggle("active-tab")
    experience.classList.toggle("active-links")
    if(experience.classList.contains("active-links")==true){
        skills.classList.remove("active-links")
        education.classList.remove("active-links")
     }
    if(tab2.classList.contains("active-tab")==true){
        tab1.classList.remove("active-tab")
        tab3.classList.remove("active-tab")
    }
})
education.addEventListener("click",()=>{
    tab3.classList.toggle("active-tab")
    education.classList.toggle("active-links")
    if(education.classList.contains("active-links")==true){
        experience.classList.remove("active-links")
        skills.classList.remove("active-links")
     }
    if(tab3.classList.contains("active-tab")==true){
        tab2.classList.remove("active-tab")
        tab1.classList.remove("active-tab")
    }
})


let openmenu = document.getElementById("open-menu")
let closemenu = document.getElementById("close-menu")
let sidemenu = document.getElementById("sidemenu")
openmenu.addEventListener("click",()=>[
    sidemenu.style.right="0"
])
closemenu.addEventListener("click",()=>[
    sidemenu.style.right="-300px"
])