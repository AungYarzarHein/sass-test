
const toggleBtn = document.getElementById("toggle-btn");
const navMenu = document.querySelector(".navbar-links");
toggleBtn.addEventListener("click",()=>{
    // check is show or not
    if(navMenu.classList.contains("show")){
        navMenu.classList.remove("show")
    }else{
        navMenu.classList.add("show")
    }
})