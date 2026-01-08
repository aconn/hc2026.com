/* ===============================================
   Holy Cross 2026 - Main JavaScript
   =============================================== */

// ===============================================
// Configuration - EDIT THESE VALUES
// ===============================================

// Set your graduation date and time here
// Format: 'YYYY-MM-DDTHH:MM:SS' (24-hour format)
// Current setting: May 20, 2026 at 6:00 PM
// To change: Update the date/time below and save the file
const GRADUATION_DATE = new Date('2026-05-20T18:00:00');

// ===============================================
// Countdown Timer
// ===============================================

function updateCountdown() {
    const now = new Date();
    const diff = GRADUATION_DATE - now;

    if (diff <= 0) {
        // Graduation has passed!
        document.getElementById('countdown-days').textContent = '0';
        document.getElementById('countdown-hours').textContent = '0';
        document.getElementById('countdown-minutes').textContent = '0';
        document.getElementById('countdown-seconds').textContent = '0';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-days').textContent = days;
    document.getElementById('countdown-hours').textContent = hours;
    document.getElementById('countdown-minutes').textContent = minutes;
    document.getElementById('countdown-seconds').textContent = seconds;
}

// ===============================================
// Mobile Navigation Toggle
// ===============================================

function initMobileNav() {
    const toggle = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');

    if (toggle && navList) {
        toggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            toggle.setAttribute('aria-expanded', navList.classList.contains('active'));
        });

        // Close menu when clicking on a link
        navList.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

// ===============================================
// Header Scroll Effect
// ===============================================

function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// ===============================================
// FAQ Accordion
// ===============================================

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ===============================================
// Smooth Scroll for Anchor Links
// ===============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===============================================
// Add to Calendar (ICS File Generator)
// ===============================================

// function generateICSFile and window.addGraduationToCalendar removed - replaced by Google Calendar subscription link

// ===============================================
// Animation on Scroll
// ===============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
}

// ===============================================
// Initialize Everything
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Initialize components
    initMobileNav();
    initHeaderScroll();
    initFaqAccordion();
    initSmoothScroll();
    initScrollAnimations();

    console.log('🎓 Holy Cross 2026 website loaded!');
});
