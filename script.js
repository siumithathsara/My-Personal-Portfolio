const burger = document.getElementById("burger");
const menuPanel = document.getElementById("menu-panel-id");
const buttonClose = document.getElementById("button-close-id");

burger.addEventListener("click", () => {
    menuPanel.classList.add("active");
    burger.classList.add("hide");
});

buttonClose.addEventListener("click", () => {
    menuPanel.classList.remove("active");
    burger.classList.remove("hide");
});


// resume section

function showResume(sectionId, element) {
  const sections = document.querySelectorAll(".resume-content");
  const navItems = document.querySelectorAll(".resume-nav-list li");

  navItems.forEach(item => item.classList.remove("active"));
  element.classList.add("active");

  sections.forEach(sec => sec.style.display = "none");

  if (sectionId === "all") {
    sections.forEach(sec => {
      sec.style.display = ""; 
    });
  } else {
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = ""; 
  }
}


//  work section

function showWork(sectionId, element) {
  const sections = document.querySelectorAll(".work-content");
  const navItems = document.querySelectorAll(".work-nav-list li");

  navItems.forEach(item => item.classList.remove("active"));
  element.classList.add("active");

  sections.forEach(sec => sec.style.display = "none");

  if (sectionId === "all") {
    sections.forEach(sec => {
      sec.style.display = ""; 
    });
  } else {
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = ""; 
  }
}
// name tag
const texts = [
    "SOFTWARE ENGINEER",
    "WEB DEVELOPER",
    "UI DESIGNER"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;

function typeEffect() {
    const element = document.getElementById("typing-text");
    const currentText = texts[textIndex];

    if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex--);
    } else {
        element.textContent = currentText.substring(0, charIndex++);
    }

    // When typing finished
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // pause
        return;
    }

    // When deleting finished
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // next word
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();