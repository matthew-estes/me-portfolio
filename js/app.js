function greetingAndMessage() {
    const introTextElement = document.getElementById("introText");
    const now = new Date();
    const hour = now.getHours();
  
    const path = window.location.pathname;
    let finalMessage = "Hello and welcome to Matt's portfolio!";
  
    if (path === "/" || path === "/index.html") {
      let greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
      finalMessage = `${greeting}! Hello and welcome to Matt's portfolio!`;
    } else if (path.includes("projects")) {
      finalMessage = "Dive in and take a look at what I've built so far.";
    } else if (path.includes("contact")) {
      finalMessage = "Get in touch! I'd love to hear from you.";
    }
  
    return finalMessage;
  }
  
  function typeWriter(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
  
    function typeChar() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, speed);
      }
    }
  
    typeChar();
  }
  
  window.onload = function () {
    const finalMessage = greetingAndMessage();
    typeWriter(finalMessage, "introText", 50);
  };

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("flipped");
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("flipped");
  });
});

const repoName = "/my-portfolio";
const currentPage = window.location.pathname.replace(repoName, "").split('/').pop() || "index.html";

const pageToTabClass = {
  "": "home-tab", 
  "index.html": "home-tab",
  "projects.html": "projects-tab",
  "contact.html": "contact-tab",
};

if (currentPage === "") {
  document.querySelector(".home-tab").classList.add("active");
} else if (pageToTabClass[currentPage]) {
  document.querySelector(`.${pageToTabClass[currentPage]}`).classList.add("active");
}