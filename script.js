
const toggleBtn = document.getElementById("toggle-btn");
const navMenu = document.querySelector(".navbar-links");
const section = document.getElementsByTagName("section")[0];
toggleBtn.addEventListener("click",()=>{
    // check is show or not
    if(navMenu.classList.contains("show")){
        navMenu.classList.remove("show")
    }else{
        navMenu.classList.add("show")
    }
})

section.addEventListener("click",()=>{
    navMenu.classList.remove("show");
})

