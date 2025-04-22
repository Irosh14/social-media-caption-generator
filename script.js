const generateCaptionButton = document.getElementById("generate-caption");
const copyButton = document.getElementById("copy-caption");
const generatedCaption = document.getElementById("generated-caption");
const modeToggle = document.getElementById("mode-toggle");
const modeLabel = document.getElementById("mode-label");

const captions = {
  travel: [
    "Wander often, wonder always. 🌍",
    "Adventure awaits, go find it! ✈️",
    "Take only pictures, leave only footprints. 📸",
    "Let's get lost together. 🧭"
  ],
  food: [
    "Good food = good mood. 🍕",
    "Life is uncertain, eat dessert first. 🍰",
    "Food is the ingredient that binds us together. 🍲",
    "Eat, drink, and be merry. 🍻"
  ],
  fitness: [
    "Push yourself because no one else will. 💪",
    "Strong mind, strong body. 🧠🏋️",
    "Sore today, strong tomorrow. 🔥",
    "The body achieves what the mind believes. 💯"
  ],
  love: [
    "Love is all you need. 💖",
    "You are my today and all of my tomorrows. 💕",
    "In your smile, I see something more beautiful than stars. ✨",
    "Love the way you love me. ❤️"
  ],
  motivation: [
    "Dream big. Work hard. Stay focused. 💼",
    "Every day is a second chance. 🔁",
    "Make it happen. Shock everyone. ⚡",
    "Don't stop until you're proud. 🏁"
  ],
  funny: [
    "I'm not lazy, I'm on energy-saving mode. 😴",
    "I followed my heart, it led me to the fridge. 🧀",
    "Life is short. Smile while you still have teeth. 😬",
    "Why fall in love when you can fall asleep? 😂"
  ]
};

generateCaptionButton.addEventListener("click", () => {
  const postType = document.getElementById("post-type").value;
  const randomIndex = Math.floor(Math.random() * captions[postType].length);
  generatedCaption.style.opacity = 0;

  setTimeout(() => {
    generatedCaption.textContent = captions[postType][randomIndex];
    generatedCaption.style.opacity = 1;
  }, 100);
});

copyButton.addEventListener("click", () => {
  const text = generatedCaption.textContent;
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      copyButton.textContent = "✅ Copied!";
      setTimeout(() => {
        copyButton.textContent = "📋 Copy";
      }, 1500);
    });
  }
});

modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  modeLabel.textContent = modeToggle.checked ? "🌙 Dark Mode" : "☀️ Light Mode";
});
