// Project Data
const projects = [
  {
    title: "Help Desk System",
    description:
      "A comprehensive ticketing system for medicine e-commerce platform built with MERN stack.",
    rating: 4.5,
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured online shopping platform with payment integration and admin dashboard.",
    rating: 4.0,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects and skills, built with React.",
    rating: 5.0,
  },
];

// Programming Languages Data
const languages = [
  {
    name: "JavaScript",
    icon: "fab fa-js",
    description:
      "Advanced proficiency in modern JavaScript, including ES6+ features.",
    rating: 5.0,
  },
  {
    name: "Python",
    icon: "fab fa-python",
    description:
      "Experienced in Python development, including Django and Flask frameworks.",
    rating: 4.0,
  },
  {
    name: "Java",
    icon: "fab fa-java",
    description:
      "Proficient in Java development, including Spring Boot applications.",
    rating: 3.5,
  },
];

// Function to create interactive star rating
function createStarRating(initialRating, isInteractive = true) {
  const starContainer = document.createElement("div");
  starContainer.className = `star-rating ${isInteractive ? "" : "disabled"}`;

  // Create 5 stars
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.className = i < initialRating ? "fas fa-star" : "far fa-star";
    star.setAttribute("data-rating", i + 1);
    starContainer.appendChild(star);
  }

  // Add rating value display
  const ratingValue = document.createElement("span");
  ratingValue.className = "rating-value";
  ratingValue.textContent = initialRating.toFixed(1);
  starContainer.appendChild(ratingValue);

  if (isInteractive) {
    // Hover effect
    starContainer.addEventListener("mouseover", (e) => {
      if (e.target.tagName === "I") {
        const rating = parseInt(e.target.getAttribute("data-rating"));
        updateStars(starContainer, rating, true);
      }
    });

    // Mouse leave effect
    starContainer.addEventListener("mouseleave", (e) => {
      const currentRating = parseFloat(
        starContainer.querySelector(".rating-value").textContent
      );
      updateStars(starContainer, currentRating, false);
    });

    // Click effect
    starContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "I") {
        const rating = parseInt(e.target.getAttribute("data-rating"));
        updateStars(starContainer, rating, false);
        starContainer.querySelector(".rating-value").textContent =
          rating.toFixed(1);

        // Here you can add code to save the rating to a database
        console.log(`New rating: ${rating}`);
      }
    });
  }

  return starContainer;
}

// Function to update stars visual state
function updateStars(container, rating, isHover) {
  const stars = container.querySelectorAll("i");
  stars.forEach((star, index) => {
    if (index < rating) {
      star.className = "fas fa-star";
    } else {
      star.className = "far fa-star";
    }
  });
}

// Function to create project cards
function createProjectCards() {
  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";

    const content = document.createElement("div");
    content.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

    card.appendChild(content);
    card.appendChild(createStarRating(project.rating));
    projectsContainer.appendChild(card);
  });
}

// Function to create language cards
function createLanguageCards() {
  const languagesContainer = document.getElementById("languages-container");

  languages.forEach((language) => {
    const card = document.createElement("div");
    card.className = "card";

    const content = document.createElement("div");
    content.innerHTML = `
            <i class="${language.icon} tech-icon"></i>
            <h3>${language.name}</h3>
            <p>${language.description}</p>
        `;

    card.appendChild(content);
    card.appendChild(createStarRating(language.rating));
    languagesContainer.appendChild(card);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createProjectCards();
  createLanguageCards();
});
