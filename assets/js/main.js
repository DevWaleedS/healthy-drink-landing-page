let scrollBtn = document.querySelector(".to-top");
let navBar = document.querySelector('.navbar'); 

// SCROLL FUCNTIONS
window.onscroll = () => {
  
  /**================== Add Shadow Class To Nav Bar=================  */
  
  window.scrollY === 0 ? navBar.classList.remove('shadow') : navBar.classList.add('shadow');
  
  /**================== SCROLL TO TOP =================  */
  let scrollBtn = document.querySelector(".to-top");
  window.scrollY === 0 ? scrollBtn.classList.remove('active') : scrollBtn.classList.add('active') 
}

// SCROLL TO TOP
scrollBtn.addEventListener('click', () => {
  scrollTo({
    top: 0,
    behavior : "smooth",
 })
})




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
   document.dir = language === "ar" ? "rtl" : "ltr";

}
