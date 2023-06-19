const professions = ["software engineer", "cyber security major", "web developer", "data scientist"];
let currentProfessionIndex = 0;
let typingDelay = 100; // Adjust the typing delay in milliseconds
let erasingDelay = 50; // Adjust the erasing delay in milliseconds
let newTextDelay = 2000; // Adjust the delay before typing the next sentence in milliseconds
let textElement = document.getElementById("typing-text");
let text = "";
let isTyping = true;

function type() {
  if (isTyping) {
    text = professions[currentProfessionIndex].slice(0, text.length + 1);
    textElement.textContent = "I am a " + text;
    if (text === professions[currentProfessionIndex]) {
      isTyping = false;
      setTimeout(erase, newTextDelay);
    }
  }
}

function erase() {
  if (!isTyping) {
    text = professions[currentProfessionIndex].slice(0, text.length - 1);
    textElement.textContent = "I am a " + text;
    if (text === "I am a") {
      isTyping = true;
      currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, erasingDelay);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (professions.length > 0) {
    setInterval(type, typingDelay + newTextDelay);
  }
});
