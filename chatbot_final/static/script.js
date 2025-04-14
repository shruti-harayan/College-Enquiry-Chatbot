document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider Functionality
    const slides = [
        {
            image: slideUrls.hero1,
            caption: "AT THE HANDS OF HON'BLE HIGHER EDUCATION MINISTER, GOVT. OF MAHARASHTRA, SHRI UDAY SAWANT"
        },
        {
            image: slideUrls.hero2,
            caption: "NAAC ACCREDITED 'A' GRADE COLLEGE - FOSTERING ACADEMIC EXCELLENCE"
        },
        {
            image: slideUrls.hero3,
            caption: "PROVIDING QUALITY EDUCATION SINCE DECADES - BUILDING FUTURE LEADERS"
        },
        {
            image: slideUrls.hero1,
            caption: "ADMISSION OPEN FOR 2024-25 ACADEMIC YEAR - APPLY NOW"
        }
    ];
    

    // Initialize slider with first image (already in HTML)
    let currentSlide = 0;

    // Add additional slides to the slider
    const sliderContainer = document.querySelector('.hero-slider');

    // If there are slides in our array (after the first one which is already in HTML)
    if (slides.length > 1) {
        for (let i = 1; i < slides.length; i++) {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.innerHTML = `
                <img src="${slides[i].image}" alt="College Image">
                <div class="slide-caption">
                    <h2>${slides[i].caption}</h2>
                </div>
            `;
            sliderContainer.appendChild(slide);
        }
    }

    // Get all slides after appending
    const allSlides = document.querySelectorAll('.slide');

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        allSlides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the slide at the specified index
        allSlides[index].classList.add('active');
        currentSlide = index;
    }

    // Function to show the next slide
    function nextSlide() {
        if (currentSlide < allSlides.length - 1) {
            showSlide(currentSlide + 1);
        } else {
            showSlide(0);
        }
    }

    // Function to show the previous slide
    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        } else {
            showSlide(allSlides.length - 1);
        }
    }

    // Event listeners for next and previous buttons
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Animated Counters
    const counterElements = document.querySelectorAll('.counter');
    const counterValues = [15, 5000, 90, 12]; // Values for each counter

    function animateCounters() {
        counterElements.forEach((counter, index) => {
            const target = counterValues[index];
            let current = 0;
            const increment = target / 40; // Divide by number of steps
            const timer = setInterval(() => {
                current += increment;
                // Update the counter text
                if (current >= target) {
                    // If it's a percentage counter (index 2)
                    if (index === 2) {
                        counter.textContent = Math.round(target) + '%';
                    } else {
                        counter.textContent = Math.round(target) + '+';
                    }
                    clearInterval(timer);
                } else {
                    // If it's a percentage counter (index 2)
                    if (index === 2) {
                        counter.textContent = Math.round(current) + '%';
                    } else {
                        counter.textContent = Math.round(current) + '+';
                    }
                }
            }, 50);
        });
    }

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Check if stats section is in viewport and trigger counter animation
    function checkCounters() {
        const statsSection = document.querySelector('.stats-section');
        if (statsSection && isInViewport(statsSection)) {
            animateCounters();
            // Remove scroll event listener after animation is triggered
            window.removeEventListener('scroll', checkCounters);
        }
    }

    // Add scroll event listener to check if stats section is in viewport
    window.addEventListener('scroll', checkCounters);

    // Check on initial load as well
    checkCounters();

    // Mobile menu toggle for responsive design
    const createMobileMenu = () => {
        if (window.innerWidth <= 992) {
            const nav = document.querySelector('.main-nav');

            // Only add mobile menu if it doesn't already exist
            if (!document.querySelector('.mobile-menu-toggle')) {
                // Create mobile menu toggle button
                const mobileMenuToggle = document.createElement('div');
                mobileMenuToggle.className = 'mobile-menu-toggle';
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';

                // Add mobile menu toggle button to the DOM
                nav.querySelector('.container').prepend(mobileMenuToggle);

                // Add click event listener for mobile menu toggle
                mobileMenuToggle.addEventListener('click', () => {
                    nav.querySelector('.nav-menu').classList.toggle('active');
                });

                // Additional styles for mobile menu
                const style = document.createElement('style');
                style.textContent = `
                    @media (max-width: 992px) {
                        .nav-menu {
                            display: none;
                            flex-direction: column;
                            width: 100%;
                        }
                        .nav-menu.active {
                            display: flex;
                        }
                        .mobile-menu-toggle {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-size: 24px;
                            cursor: pointer;
                            padding: 10px;
                        }
                        .nav-item {
                            width: 100%;
                        }
                        .dropdown-content {
                            position: static;
                            box-shadow: none;
                            width: 100%;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    };

    // Enhance mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Add click event listeners to dropdown items for mobile view
    const navItems = document.querySelectorAll('.nav-item.dropdown');

    navItems.forEach(item => {
        const link = item.querySelector('a');

        // Only in mobile view
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                item.classList.toggle('dropdown-active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!e.target.closest('.nav-menu') && !e.target.closest('.mobile-menu-toggle')) {
                navMenu.classList.remove('active');
                navItems.forEach(item => {
                    item.classList.remove('dropdown-active');
                });
            }
        }
    });

    // Call createMobileMenu on initial load
    createMobileMenu();

    // Add resize event listener to handle mobile menu on window resize
    window.addEventListener('resize', createMobileMenu);
});


 // Mobile Menu Toggle
 function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Chat Dialog Toggle
function toggleChat() {
    document.getElementById('chatDialog').classList.toggle('active');
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.dark-mode-toggle i').classList.toggle('fa-sun');
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Number Counter Animation
const animateCounters = () => {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = +counter.innerText.replace('+', '');
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if(current < target) {
                counter.innerText = Math.ceil(current) + '+';
                current += increment;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target + '+';
            }
        }
        updateCounter();
    });
}

// Intersection Observer for counters
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) animateCounters();
    });
});

document.querySelectorAll('.stat-item').forEach(item => observer.observe(item));

// Chatbot Functionality
document.getElementById("send").addEventListener("click", async function() {
    const userInput = document.getElementById("userInput").value;
    if(!userInput) return;

    // Add user message
    const userMsg = document.createElement('p');
    userMsg.className = 'user-msg';
    userMsg.innerHTML = `<strong>You:</strong> ${userInput}`;
    document.getElementById("chatbox").appendChild(userMsg);

    try {
        const response = await fetch("https://college-chatbot-production.up.railway.app/chatbot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: userInput })
        });
        
        const data = await response.json();
        const botMsg = document.createElement('p');
        botMsg.className = 'bot-msg';
        botMsg.innerHTML = `<strong>Bot:</strong> ${data.response || 'Error processing request'}`;
        document.getElementById("chatbox").appendChild(botMsg);
    } catch (error) {
        console.error('Chat error:', error);
    }

    document.getElementById("userInput").value = "";
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
});

// Enter Key Support
document.getElementById("userInput").addEventListener("keypress", (e) => {
    if(e.key === "Enter") document.getElementById("send").click();
});
