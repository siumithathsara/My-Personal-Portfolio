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
    "SOFTWARE ENGINEER ",
    "WEB DEVELOPER ",
    "UI DESIGNER  "
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 70;

function typeEffect() {
    const element = document.getElementById("typing-text");
    const currentText = texts[textIndex];

    if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex--);
    } else {
        element.textContent = currentText.substring(0, charIndex++);
    }

    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); 
        return;
    }

    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; 
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();

// email
const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    
    if (name.length < 3) {
        showMessage("Name must be at least 3 characters", "red");
        return;
    }

    if (!email.match(emailPattern)) {
        showMessage("Enter a valid email address", "red");
        return;
    }

    if (message.length < 10) {
        showMessage("Message must be at least 10 characters", "red");
        return;
    }

   
    showMessage("Message sent successfully!", "green");
    form.reset();
});


function showMessage(msg, color) {
    messageBox.style.display = "block";
    messageBox.style.color = color;
    messageBox.textContent = msg;
}