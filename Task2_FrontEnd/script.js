const profiles = [
  {
    name: "Raja Muhammad Arbab",
    img: "images/arbab.jpg",
    desc: "Front-End Developer passionate about creating responsive and modern web designs."
  },
  {
    name: "Web Development",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    desc: "Building interactive and mobile-friendly websites with clean, maintainable code."
  },
  {
    name: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
    desc: "Crafting intuitive interfaces and enhancing user experiences through design."
  },
  {
    name: "JavaScript Projects",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    desc: "Creating dynamic, data-driven front-end components and animations."
  },
  {
    name: "API Integration",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    desc: "Connecting front-end apps to REST APIs and handling real-time data efficiently."
  }
];


    document.addEventListener("DOMContentLoaded", () => {

  const cardSection = document.getElementById("card-section");

  
  if (!cardSection) {
    console.error("❌ Card section not found in HTML!");
    return;
  }

  
  profiles.forEach(profile => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${profile.img}" alt="${profile.name}">
      <div class="card-content">
        <h3>${profile.name}</h3>
        <p>${profile.desc}</p>
        <button class="view-btn">View Profile</button>
      </div>
    `;

    
    card.querySelector(".view-btn").addEventListener("click", () => {
      alert(`👤 Viewing ${profile.name}'s profile!`);
    });

    cardSection.appendChild(card);
  });

  
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });

 
  function revealCardsOnScroll() {
    const cards = document.querySelectorAll(".card");
    const triggerBottom = window.innerHeight * 0.9;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("show");
      }
    });
  }

 
  window.addEventListener("scroll", revealCardsOnScroll);
  revealCardsOnScroll();
});
