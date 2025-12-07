/*
(function() {
  // Prevent duplicate init when script is injected multiple times
  if (window.__typingHeroRunning) {
    window.__typingHeroUpdateEl?.(document.getElementById('typing-changing-word'));
    return;
  }
  window.__typingHeroRunning = true;

  const words = [
    'artificial intelligence',
    'chatbot automation',
    'data engineering',
    'data modeling',
    'enterprise systems',
    'knowledge engineering',
    'palantir foundry',
    'prompt engineering'
  ];

  let el = document.getElementById('typing-changing-word');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;   // ms per character when typing
  const deletingSpeed = 60;   // ms per character when deleting
  const pauseAfterWord = 1200; // pause when a word is complete

  function type() {
    // Rebind if the element was re-rendered or removed from DOM
    if (!el || !document.body.contains(el)) {
      el = document.getElementById('typing-changing-word');
      if (!el) {
        setTimeout(type, typingSpeed);
        return;
      }
    }

    const currentWord = words[wordIndex];

    if (!isDeleting) {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseAfterWord);
        return;
      }
    } else {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, delay);
  }

  // Allow callers to rebind to the current element if needed
  window.__typingHeroUpdateEl = function(newEl) {
    if (newEl) el = newEl;
  };

  type();
})();

*/

