const menu=document.querySelector(".menu");
const navMenu=document.querySelector(".nav-menu");
menu.addEventListener("click",() => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");

})
document.querySelectorAll(".linkk").forEach( n => n.
 addEventListener("click",() => {
    menu.classList.remove("active");
    navMenuclassList.remove("active");
    
 })   )