/* ===========================
   Mobile Navigation Toggle
=========================== */

const navLinks = document.querySelector("nav ul");

const menuBtn = document.querySelector(".menu-btn");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

}

/* ===========================
   Navbar Background on Scroll
=========================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});

/* ===========================
   Typing Animation
=========================== */

const words=[

"AI Engineer",
"Future Researcher",
"Web Developer",
"Problem Solver"

];

let wordIndex=0;
let charIndex=0;

const typing=document.getElementById("typing");

function type(){

if(!typing) return;

if(charIndex<words[wordIndex].length){

typing.textContent+=words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(charIndex>0){

typing.textContent=words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,50);

}

else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(type,300);

}

}

type();

/* ===========================
   Animated Counters
=========================== */

const counters=document.querySelectorAll(".counter");

const speed=100;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

});

/* ===========================
   Fade-in Animation
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

/* ===========================
   Button Ripple Effect
=========================== */

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-this.offsetLeft-diameter/2}px`;

circle.style.top=`${e.clientY-this.offsetTop-diameter/2}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/* ===========================
   Scroll To Top Button
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

console.log("Portfolio Loaded 🚀");
