// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button');
    const navMenu = document.querySelector('.lg\\:flex');
    
    mobileMenuButton.addEventListener('click', function() {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('mobile-menu');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            navMenu.classList.add('hidden');
            navMenu.classList.remove('mobile-menu', 'active');
        }
    });
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu after clicking a link
            const navMenu = document.querySelector('.lg\\:flex');
            navMenu.classList.add('hidden');
            navMenu.classList.remove('mobile-menu', 'active');
        }
    });
});

// Form validation
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && message) {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, message });
            this.reset();
            alert('Thank you for your message! We will get back to you soon.');
        }
    });
}

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .feature-icon');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('animate-fadeIn');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);