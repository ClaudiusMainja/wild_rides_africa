
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    closeMenuButton.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Mobile dropdowns
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('hidden');
            
            // Change the icon
            const icon = this.querySelector('i');
            if (dropdownContent.classList.contains('hidden')) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
    
    // Fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // Counter animation
    const counterElements = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                const speed = Math.floor(2000 / countTo);
                
                const updateCount = () => {
                    if (count < countTo) {
                        count++;
                        target.innerText = count;
                        setTimeout(updateCount, speed);
                    } else {
                        target.innerText = countTo;
                    }
                };
                
                updateCount();
                
                // Unobserve after animation
                counterObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counterElements.forEach(element => {
        counterObserver.observe(element);
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    const logoContainer = document.querySelector('.logo-container');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-lg');
            if (window.innerWidth > 768) {
                logoContainer.style.width = '140px';
                logoContainer.style.height = '140px';
            }
        } else {
            navbar.classList.remove('shadow-lg');
            if (window.innerWidth > 768) {
                logoContainer.style.width = '180px';
                logoContainer.style.height = '180px';
            }
        }
    });
    
    // Play button interaction
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would trigger the video play
            alert('Video playback would start here in the actual implementation.');
        });
    });
    
    // GSAP animations (additional interactive elements)
    gsap.from(".animate-hero-text", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });
    
    gsap.from(".animate-hero-subtext", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });
    
    gsap.from(".animate-hero-button", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.6,
        stagger: 0.2
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Adjust for navbar height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
});
