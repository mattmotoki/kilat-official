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

// Popup handling
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const popupForm = document.getElementById('popupForm');
    
    // Check if popup has been shown in this session
    if (!sessionStorage.getItem('popupShown')) {
        // Show popup after 3 seconds
        setTimeout(() => {
            popup.classList.remove('hidden');
            popup.classList.add('active');
        }, 3000);
    }
    
    // Close popup when clicking the close button
    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300);
    });
    
    // Close popup when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            setTimeout(() => {
                popup.classList.add('hidden');
            }, 300);
        }
    });
    
    // Handle form submission
    popupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your server
        console.log('Email submitted:', email);
        
        // Close popup
        popup.classList.remove('active');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300);
        
        // Show success message
        alert('Thank you for signing up! Your 20% discount code will be sent to your email.');
        
        // Mark popup as shown in this session
        sessionStorage.setItem('popupShown', 'true');
    });
});