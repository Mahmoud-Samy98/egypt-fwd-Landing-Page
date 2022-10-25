/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const sections = Array.from(document.querySelectorAll("section"));
const menu = document.getElementById("navbar__list");
const links = Array.from(document.querySelectorAll("li"));

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// to reset the active classes
function reset() {
  let items = Array.from(document.querySelectorAll("a"));
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

function createNavItem() {
  for (section of sections) {
    navItem = document.createElement("li");
    navItem.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link ${section.id}">${section.dataset.nav} </a></li>`;
    menu.appendChild(navItem);
  }
}

// build the nav
createNavItem();

/**
 * End Main Functions
 * Begin Events
 *
 */

// scroll event
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (sec) {
    // if section in viewPort then toggle class (active) and (your-active-class)
    if (
      sec.getBoundingClientRect().top >= -400 &&
      sec.getBoundingClientRect().top <= 150
    ) {
      sec.classList.add("your-active-class");
      document.querySelector(`.${sec.id}`).classList.add("active");
    } else {
      sec.classList.remove("your-active-class");
      document.querySelector(`.${sec.id}`).classList.remove("active");
    }
  });
};

// click event
menu.addEventListener("click", (moveTo) => {
  moveTo.preventDefault();
  if (moveTo.target.dataset.nav) {
    // move the viewport to the exact section
    document
      .getElementById(`${moveTo.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    reset();
    // add active class to navbar
    document
      .querySelector(`.${moveTo.target.dataset.nav}`)
      .classList.toggle("active");
    console.log(moveTo.target.dataset.nav);
  }
});
