// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const menuCategories = document.querySelectorAll('.menu-category');
const menuSections = document.querySelectorAll('.menu-section');
const reservationForm = document.querySelector('.reservation-form');
const dateInput = document.getElementById('date');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Menu Category Switching
menuCategories.forEach(category => {
    category.addEventListener('click', () => {
        // Remove active class from all categories and sections
        menuCategories.forEach(cat => cat.classList.remove('active'));
        menuSections.forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked category
        category.classList.add('active');
        
        // Show corresponding menu section
        const targetCategory = category.getAttribute('data-category');
        const targetSection = document.getElementById(targetCategory);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// Set minimum date for reservations (today)
if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
    
    // Set default date to tomorrow
    dateInput.value = minDate;
}

// Form Validation and Submission
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(reservationForm);
        const reservationData = {
            guests: formData.get('guests'),
            date: formData.get('date'),
            time: formData.get('time'),
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            special: formData.get('special')
        };
        
        // Basic validation
        if (!reservationData.guests || !reservationData.date || !reservationData.time || 
            !reservationData.name || !reservationData.phone || !reservationData.email) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(reservationData.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(reservationData.phone.replace(/[\s\-\(\)]/g, ''))) {
            showMessage('Please enter a valid phone number.', 'error');
            return;
        }
        
        // Date validation (must be in the future)
        const selectedDate = new Date(reservationData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate <= today) {
            showMessage('Please select a date in the future.', 'error');
            return;
        }
        
        // Simulate form submission
        showMessage('Thank you! Your reservation request has been submitted. We will contact you shortly to confirm.', 'success');
        reservationForm.reset();
        
        // Reset date to tomorrow
        if (dateInput) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.value = tomorrow.toISOString().split('T')[0];
        }
        
        console.log('Reservation Data:', reservationData);
    });
}

// Message Display Function
function showMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 5px;
        font-weight: 600;
        text-align: center;
        transition: all 0.3s ease;
        ${type === 'error' ? 
            'background: #ff6b6b; color: white;' : 
            'background: #51cf66; color: white;'
        }
    `;
    
    // Insert message before submit button
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.parentNode.insertBefore(messageDiv, submitBtn);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 300);
    }, 5000);
}

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 24, 16, 0.98)';
    } else {
        navbar.style.background = 'rgba(44, 24, 16, 0.95)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.featured-item, .menu-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// CTA Button smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const reservationsSection = document.querySelector('#reservations');
            if (reservationsSection) {
                const offsetTop = reservationsSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Add loading state to form submission
function setFormLoading(isLoading) {
    const submitBtn = document.querySelector('.submit-btn');
    const formInputs = document.querySelectorAll('.reservation-form input, .reservation-form select, .reservation-form textarea');
    
    if (isLoading) {
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        formInputs.forEach(input => input.disabled = true);
    } else {
        submitBtn.textContent = 'Reserve Table';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        formInputs.forEach(input => input.disabled = false);
    }
}

// Enhanced form submission with loading state
if (reservationForm) {
    const originalSubmitHandler = reservationForm.onsubmit;
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        setFormLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
            setFormLoading(false);
            
            // Get form data and validate (previous validation code here)
            const formData = new FormData(reservationForm);
            const reservationData = {
                guests: formData.get('guests'),
                date: formData.get('date'),
                time: formData.get('time'),
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                special: formData.get('special')
            };
            
            // Validation
            if (!reservationData.guests || !reservationData.date || !reservationData.time || 
                !reservationData.name || !reservationData.phone || !reservationData.email) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(reservationData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            const selectedDate = new Date(reservationData.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate <= today) {
                showMessage('Please select a date in the future.', 'error');
                return;
            }
            
            // Success
            showMessage('Thank you! Your reservation request has been submitted. We will contact you shortly to confirm.', 'success');
            reservationForm.reset();
            
            if (dateInput) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                dateInput.value = tomorrow.toISOString().split('T')[0];
            }
            
        }, 1000);
    });
}