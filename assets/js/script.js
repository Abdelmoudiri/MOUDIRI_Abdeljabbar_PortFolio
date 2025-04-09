'use strict';

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const scrollAnimationElements = document.querySelectorAll('.scroll-animation');
const filterButtons = document.querySelectorAll('.project-filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contact-form');

// Theme Toggle Functionality
function initThemeToggle() {
  // Check for saved theme preference or use device preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    htmlElement.classList.add('dark');
  }
  
  themeToggle?.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  menuToggle?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Change icon based on menu state
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
}

// Scroll animations
function initScrollAnimations() {
  function checkScrollAnimation() {
    scrollAnimationElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  }
  
  // Initialize scroll animations
  window.addEventListener('scroll', checkScrollAnimation);
  window.addEventListener('load', checkScrollAnimation);
}

// Project filtering
function initProjectFilters() {
  filterButtons?.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active', 'bg-primary-500', 'text-white'));
      
      // Add active class to clicked button
      button.classList.add('active', 'bg-primary-500', 'text-white');
      
      const filter = button.getAttribute('data-filter');
      
      projectItems?.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Highlight active nav link on scroll
function initNavHighlighting() {
  function setActiveLink() {
    let currentSection = '';
    
    sections?.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks?.forEach(link => {
      link.classList.remove('text-primary-500', 'dark:text-primary-400');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('text-primary-500', 'dark:text-primary-400');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveLink);
}

// Testimonials carousel
function initTestimonialsCarousel() {
  const carousel = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const indicators = document.querySelectorAll('.carousel-indicator');
  let currentIndex = 0;
  
  if (!carousel) return;
  
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    indicators?.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('bg-primary-500');
        indicator.classList.remove('bg-gray-300', 'dark:bg-dark-300');
      } else {
        indicator.classList.remove('bg-primary-500');
        indicator.classList.add('bg-gray-300', 'dark:bg-dark-300');
      }
    });
  }
  
  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
  });
  
  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });
  
  indicators?.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
  
  // Auto-scroll carousel
  let carouselInterval = setInterval(() => {
    if (!slides?.length) return;
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  }, 5000);
  
  // Pause carousel on hover
  carousel?.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
  });
  
  carousel?.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(() => {
      if (!slides?.length) return;
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    }, 5000);
  });
}

// Contact form submission
function initContactForm() {
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const subject = document.getElementById('subject')?.value;
    const message = document.getElementById('message')?.value;
    
    // Here you would normally send the data to a server
    // For this example, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
    
    // Reset the form
    contactForm.reset();
  });
}

// Legacy code - Testimonial modals from original portfolio
function initLegacyTestimonialModals() {
  // testimonials variables
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  // modal variable
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  // modal toggle function
  const testimonialsModalFunc = function () {
    if (!modalContainer) return;
    modalContainer.classList.toggle("active");
    overlay?.classList.toggle("active");
  }

  // add click event to all modal items
  testimonialsItem?.forEach(item => {
    item.addEventListener("click", function () {
      if (!modalImg || !modalTitle || !modalText) return;
      
      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");
      
      if (avatar) modalImg.src = avatar.src;
      if (avatar) modalImg.alt = avatar.alt;
      if (title) modalTitle.innerHTML = title.innerHTML;
      if (text) modalText.innerHTML = text.innerHTML;

      testimonialsModalFunc();
    });
  });

  // add click event to modal close button
  modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
  overlay?.addEventListener("click", testimonialsModalFunc);
}

// Legacy code - Portfolio filtering from original portfolio
function initLegacyPortfolioFiltering() {
  // custom select variables
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  select?.addEventListener("click", function () { 
    this.classList.toggle("active"); 
  });

  // add event in all select items
  selectItems?.forEach(item => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      select?.classList.toggle("active");
      filterFunc(selectedValue);
    });
  });

  const filterFunc = function (selectedValue) {
    filterItems?.forEach(item => {
      if (selectedValue === "all" || selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // add event in all filter button items for large screen
  let lastClickedBtn = filterBtn?.[0];

  filterBtn?.forEach(button => {
    button.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });
}

// Legacy code - Page navigation
function initLegacyPageNavigation() {
  // page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // add event to all nav link
  navigationLinks?.forEach((link, i) => {
    link.addEventListener("click", function () {
      pages?.forEach((page, i) => {
        if (this.innerHTML.toLowerCase() === page.dataset.page) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      });
    });
  });
}

// Legacy code - Sidebar toggle
function initLegacySidebar() {
  // sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  sidebarBtn?.addEventListener("click", function () { 
    sidebar?.classList.toggle("active"); 
  });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
  // Modern portfolio functions
  initThemeToggle();
  initMobileMenu();
  initScrollAnimations();
  initProjectFilters();
  initNavHighlighting();
  initTestimonialsCarousel();
  initContactForm();
  
  // Legacy portfolio functions (for backwards compatibility)
  initLegacyTestimonialModals();
  initLegacyPortfolioFiltering();
  initLegacyPageNavigation();
  initLegacySidebar();
});