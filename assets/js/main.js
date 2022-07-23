let scrollBtn = document.querySelector(".to-top");
let navBar = document.querySelector('.navbar');

let navLinks = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('section');

// SCROLL FUCNTIONS
window.onscroll = () => {
  /**================== Add Shadow Class To Nav Bar=================  */

  window.scrollY === 0
    ? navBar.classList.remove('shadow')
    : navBar.classList.add('shadow');

  
  /**================== SCROLL TO TOP =================  */
  let scrollBtn = document.querySelector('.to-top');
  window.scrollY === 0
    ? scrollBtn.classList.remove('active')
    : scrollBtn.classList.add('active');

  
  /**================== NAV LINKS ANIMATIONS =================  */
  sections.forEach((section) => {

    // get all varaibles 
    let top = window.scrollY;
    let offset = section.offsetTop ;
    let hight = section.offsetHeight;
    let id = section.getAttribute('id');



    // if condition 
    if (top >= offset && top < offset + hight) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        //add active class to current section
        const newLocal = `header nav a[href*= ${id}]`;
        document.querySelector(newLocal).classList.add('active');
      });
    }
  })
}





/**================== SCROLL TO TOP =================  */
scrollBtn.addEventListener('click', () => {
  scrollTo({
    top: 0,
    behavior : "smooth",
 })
})






/**================== NAV LINKS ANIMATIONS =================  */
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((link) => {
      link.classList.remove('active');
    })
  event.currentTarget.classList.add('active')
  })
});





/**================== LOCALIZATION =================  */
// Import translations form translations.js file
import translations from "./translations.js";


// Get The Swither Element
const languageSelector = document.querySelector("[data-switcher]");

// Add Change 
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);

  // to storge language into localstrge
  localStorage.setItem("lang", event.target.value);
});

// Set this event to save user languge 
document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});


// Function To SetLanguage
const setLanguage = (language) => { 

  // Select element wich can be translate
  const elements = document.querySelectorAll("[data-key]");

  // Looping to get translation key
  elements.forEach((element) => {
    const translationsKey = element.getAttribute("data-key");

    // change innerHTML for element
    element.innerHTML = translations[language][translationsKey]

  })
 
  // if  to change dir 
  let heroImage = document.querySelector('.hero-img img');
  document.dir = language === "ar" ? "rtl" : "ltr";
  // CHANGE HERO IMAGE 
  document.dir === 'rtl'
    ? (heroImage.src = 'assets/images/header/hero-images/hero-ar.png')
    : (heroImage.src = 'assets/images/header/hero-images/hero.png');
  

}
