const generateCaptionButton = document.getElementById("generate-caption");
const generatedCaption = document.getElementById("generated-caption");

const captions = {
  travel: [
    "Wander often, wonder always.",
    "Adventure awaits, go find it!",
    "Take only pictures, leave only footprints.",
    "Let's get lost together."
  ],
  food: [
    "Good food = good mood.",
    "Life is uncertain, eat dessert first.",
    "Food is the ingredient that binds us together.",
    "Eat, drink, and be merry."
  ],
  fitness: [
    "Push yourself because no one else is going to do it for you.",
    "Strength doesn't come from what you can do, it comes from overcoming the things you once thought you couldn't.",
    "Sore today, strong tomorrow.",
    "The body achieves what the mind believes."
  ]
};

generateCaptionButton.addEventListener("click", () => {
  const postType = document.getElementById("post-type").value;
  const randomIndex = Math.floor(Math.random() * captions[postType].length);
  generatedCaption.textContent = captions[postType][randomIndex];
});
