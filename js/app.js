const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

const texts = ["Web Devloper"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count =0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();



function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}


// 


let Img1=document.getElementById("img-element");
let Intro=document.getElementById("intro");
let Info_me=document.getElementById("info-me");
let MY_btn=document.getElementById("me-btn");
let Loading=document.getElementById("loading");


window.onload=()=>{

  Img1.classList.add("me-left");
  Intro.classList.add("me-header");
  Info_me.classList.add("info-me");
  MY_btn.classList.add("me-btn");
  Loading.classList.add("show");
  setTimeout(()=>{
  Loading.classList.remove("show");

  },2000);

}


//
let Contact_from=document.getElementById("contact-form");
let Contact_info=document.getElementById("contact-info");
let Contact=document.getElementById("contact");
let BTN=document.getElementById("back-btn");
//portfolio
let Project1=document.getElementById("pro-1");
let Project2=document.getElementById("pro-2");
let Project3=document.getElementById("pro-3");
let Project4=document.getElementById("pro-4");
let Project5=document.getElementById("pro-5");
let Project6=document.getElementById("pro-6");
let Project7=document.getElementById("pro-7");
let Project8=document.getElementById("pro-8");
let Project9=document.getElementById("pro-9");
let Project10=document.getElementById("pro-10");
let Project11=document.getElementById("pro-11");
let portfolio=document.getElementById("portfolio");







window.onscroll=()=>{
  if(window.scrollY >= Contact.offsetTop - 200 ){
    Contact_from.classList.add("opacity");
    Contact_info.classList.add("opacity");


  }
  if(window.scrollY <= 700){
    BTN.classList.remove("show");
    
  }
  else{
    BTN.classList.add("show");

  }
  if(window.scrollY >= portfolio.offsetTop - 50){
    Project1.classList.add("port-left");
   

  }
  if(window.scrollY >= portfolio.offsetTop + 50){
    Project9.classList.add("port-right");
   
    

  }
  if(window.scrollY >= portfolio.offsetTop + 250){
    Project7.classList.add("port-left");
   

  }
  if(window.scrollY >= portfolio.offsetTop + 450){
    Project3.classList.add("port-right");
   
    

  }
  if(window.scrollY >= portfolio.offsetTop + 650){
    Project5.classList.add("port-left");
   

  }
  if(window.scrollY >= portfolio.offsetTop + 850){
    Project6.classList.add("port-right");
   
    

  }
  if(window.scrollY >= portfolio.offsetTop + 1050){
    Project2.classList.add("port-left");
   

  }
  if(window.scrollY >= portfolio.offsetTop + 1250){
    Project4.classList.add("port-right");
   
    

  }
  if(window.scrollY >= portfolio.offsetTop + 1450){
     Project10.classList.add("port-left");
    
   

  }
  if(window.scrollY >= portfolio.offsetTop + 1650){
    Project8.classList.add("port-right");
   
    

  }
  if(window.scrollY >= portfolio.offsetTop + 1850){
    Project11.classList.add("port-left");
   
  

 }

}
 
