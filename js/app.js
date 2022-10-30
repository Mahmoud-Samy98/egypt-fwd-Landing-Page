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
const liHTML = `<a href="#%url%" data-nav="%dataNav%" class="menu__link %class%">%sectionTitle%</a>`;

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
    navItem.innerHTML = liHTML
      .replace("%url%", section.id)
      .replace("%dataNav%", section.id)
      .replace("%class%", section.id)
      .replace("%sectionTitle%", section.dataset.nav);
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
  for (section of sections) {
    // if section in viewPort then toggle class (active) and (your-active-class)
    if (
      section.getBoundingClientRect().y <= 150 &&
      section.getBoundingClientRect().y >= -400
    ) {
      document.querySelector(`.${section.id}`).classList.add("active");
      section.classList.add("your-active-class");
    } else {
      document.querySelector(`.${section.id}`).classList.remove("active");
      section.classList.remove("your-active-class");
    }
  }
  document.querySelectorAll("section").forEach();
};

// click event
menu.addEventListener("click", (moveTo) => {
  moveTo.preventDefault();
  // move the viewport to the exact section
  document
    .getElementById(`${moveTo.target.dataset.nav}`)
    .scrollIntoView({ behavior: "smooth" });
  reset();
  // add active class to navbar
  document
    .querySelector(`.${moveTo.target.dataset.nav}`)
    .classList.toggle("active");
});
