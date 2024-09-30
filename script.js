const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');


function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20')
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent', 'text-white')
    }
    else{
        navBar.classList.remove('bg-white','bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20')
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent', 'text-white')

    } 
})
// Get the menu icon elements
const menuIconBlack = document.querySelector('#menuIcon img:nth-child(1)');
const menuIconWhite = document.querySelector('#menuIcon img:nth-child(2)');

// Function to change menu icon on scroll
function changeMenuIcon() {
  // Check if the user has scrolled down
  if (window.scrollY > 100) {
    // Show the black menu icon and hide the white menu icon
    menuIconBlack.classList.remove('hidden');
    menuIconWhite.classList.add('hidden');
  } else {
    // Show the white menu icon and hide the black menu icon
    menuIconBlack.classList.add('hidden');
    menuIconWhite.classList.remove('hidden');
  }
}

// Add event listener to the window's scroll event
window.addEventListener('scroll', changeMenuIcon);
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

       function opentab(event, tabname) {
  // Remove active class from all tab links
  var tablinks = document.getElementsByClassName("tab-links");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  // Remove active class from all tab contents
  var tabcontents = document.getElementsByClassName("tab-contents");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  // Add active class to the current tab link
  event.target.classList.add("active-link");

  // Add active class to the corresponding tab content
  document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function() {
  const comingSoonText = "COMING SOON!";
  const comingSoonElement = document.getElementById("coming-soon");
  let index = 0;
  let typing = true;

  function typeComingSoon() {
    if (typing) {
      if (index < comingSoonText.length) {
        comingSoonElement.textContent = comingSoonText.substring(0, index + 1);
        index++;
        setTimeout(typeComingSoon, 200); // adjust the speed of the typing effect
      } else {
        typing = false;
        setTimeout(function() {
          comingSoonElement.textContent = "";
          index = 0;
          typing = true;
          typeComingSoon();
        }, 2000); // adjust the delay before the text disappears
      }
    }
  }

  typeComingSoon();
});