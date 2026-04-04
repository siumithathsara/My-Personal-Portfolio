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

