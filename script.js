// Typed animation
const textArray = ["Aspiring Software Developer", "Frontend Web Developer", "Tech Enthusiast"];
let textIndex = 0, charIndex = 0;
const typedText = document.getElementById("typed-text");

function type(){
  if(charIndex<textArray[textIndex].length){
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type,100);
  } else { setTimeout(erase,2000);}
}

function erase(){
  if(charIndex>0){
    typedText.textContent=textArray[textIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase,60);
  } else { textIndex=(textIndex+1)%textArray.length; setTimeout(type,500);}
}
document.addEventListener("DOMContentLoaded",type);

// Fade-in on scroll
const fadeEls=document.querySelectorAll(".fade-in");
window.addEventListener("scroll",()=>{
  fadeEls.forEach(el=>{
    const rect=el.getBoundingClientRect().top;
    if(rect<window.innerHeight-80) el.classList.add("visible");
  });
});

// Contact form dummy
document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Thank you! Your message has been received.");
  e.target.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});
