const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
// Back to top button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.className = 'ri-sun-line';
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.className = 'ri-moon-line';
    localStorage.setItem('theme', 'light');
  }
});

// Check saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.className = 'ri-sun-line';
}

 // Progress calculation
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateProgress);
    });
    
    function updateProgress() {
      const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
      const total = checkboxes.length;
      const percent = Math.round((checked / total) * 100);
      
      progressFill.style.width = `${percent}%`;
      progressText.textContent = `${percent}% Complete`;
    }