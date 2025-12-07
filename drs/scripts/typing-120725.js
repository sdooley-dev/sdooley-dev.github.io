const words = [
"artificial intelligence",
"chatbot automation",
"data engineering",
"data modeling",
"enterprise systems",
"knowledge engineering",
"palantir foundry",
"prompt engineering"
];

const el = document.getElementById("typing-changing-word");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;   // ms per character when typing
const deletingSpeed = 60;  // ms per character when deleting
const pauseAfterWord = 1200; // pause when a word is complete

function type() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // typing forward
    el.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      // word finished – pause, then start deleting
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseAfterWord);
      return;
    }
  } else {
    // deleting
    el.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      // move to next word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  const delay = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(type, delay);
}

type();
