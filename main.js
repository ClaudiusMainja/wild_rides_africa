
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


//Hero Section Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Safari track elements animation
    const trackElements = document.querySelectorAll('.track-element');
    
    function animateTracks() {
        trackElements.forEach(track => {
            const randomX = Math.floor(Math.random() * 200) - 100;
            const randomY = Math.floor(Math.random() * 200) - 100;
            track.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    }
    
    setInterval(animateTracks, 7000);
    

    
    // Experience option selection
    if (experienceOptions) {
        experienceOptions.forEach(option => {
            option.addEventListener('click', function() {
                // First remove selected class from all options
                experienceOptions.forEach(opt => {
                    if (opt !== option && !opt.classList.contains('border-2')) {
                        opt.classList.remove('bg-white/20');
                    }
                });
                
                // Toggle selected state for current option
                if (!option.classList.contains('border-2')) {
                    option.classList.toggle('bg-white/20');
                }
            });
        });
    }
    
    // Intersection Observer for animation on scroll
    const animatedElements = document.querySelectorAll('.heading-reveal, .fade-in-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    
    // Auto-show a promotional toast after 3 seconds
    setTimeout(() => {
        // Create and display a promotional toast
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 left-4 bg-[#AF8349] text-white py-3 px-4 rounded-lg shadow-lg z-40 transform translate-y-20 opacity-0 transition-all duration-500 max-w-xs';
        toast.innerHTML = `
            <div class="flex items-center">
                <div class="bg-white rounded-full p-2 mr-3">
                    <i class="fas fa-percentage text-[#AF8349]"></i>
                </div>
                <div>
                    <p class="font-bold">Limited Time Offer!</p>
                    <p class="text-sm">Book now and get 15% OFF on group bookings of 4+</p>
                </div>
                <button class="ml-2 text-white/80 hover:text-white" onclick="this.parentElement.parentElement.remove();">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Slide in animation
        setTimeout(() => {
            toast.classList.remove('translate-y-20', 'opacity-0');
        }, 100);
        
        // Auto remove after 8 seconds
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            setTimeout(() => toast.remove(), 500);
        }, 8000);
    }, 3000);
});

