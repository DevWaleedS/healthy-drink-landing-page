

window.onscroll = () => {
  
  /**================== Add Shadow Class To Nav Bar=================  */
  let navBar = document.querySelector('.navbar'); 
  window.scrollY === 0 ? navBar.classList.remove('shadow') : navBar.classList.add('shadow');
  
  /**================== SCROLL TO TOP =================  */
  let scrollBtn = document.querySelector(".to-top");
  window.scrollY === 0 ? scrollBtn.classList.remove('active') : scrollBtn.classList.add('active') 
}



/**================== SCROLL REVEAL ANIMATIONS =================  */
 








