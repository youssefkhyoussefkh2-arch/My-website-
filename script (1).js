// Dark Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById('darkModeBtn');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        btn.textContent = '🌙 الوضع الليلي';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️ الوضع النهاري';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('darkModeBtn');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️ الوضع النهاري';
    }
});

// Theme Color Changer
function changeTheme(color) {
    const body = document.body;
    
    // Remove existing color themes
    body.classList.remove('theme-red', 'theme-green', 'theme-blue', 'theme-orange', 'theme-purple');
    
    // Set new theme
    body.setAttribute('data-theme', color);
    
    // Save theme preference
    localStorage.setItem('colorTheme', color);
    
    // Add some sparkle effect
    createSparkles();
}

// Load saved color theme
window.addEventListener('load', () => {
    const savedColorTheme = localStorage.getItem('colorTheme');
    if (savedColorTheme) {
        changeTheme(savedColorTheme);
    }
});

// Magic Button Function
function createMagic() {
    const container = document.getElementById('magic-container');
    const button = document.querySelector('.magic-button');
    
    // Create magical particles
    const particles = ['✨', '🌟', '💫', '⭐', '🎉', '🎊', '💖', '💝', '🦋', '🌸'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        
        const rect = button.getBoundingClientRect();
        particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }
    
    // Show magical message
    const messages = [
        '🎉 مبروك! لقد اكتشفت السحر!',
        '✨ أتمنى لك يوماً مليئاً بالسعادة!',
        '💖 أنت شخص مميز ورائع!',
        '🌟 السعادة تملأ قلبك دائماً!',
        '🦋 كل يوم معك هو يوم جميل!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    container.innerHTML = `<div style="
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        padding: 1rem 2rem;
        border-radius: 15px;
        margin-top: 1rem;
        font-size: 1.1rem;
        animation: fadeInUp 0.5s ease-out;
        text-align: center;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    ">${randomMessage}</div>`;
    
    // Clear message after 5 seconds
    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}

// Create sparkles effect
function createSparkles() {
    const sparkles = ['✨', '🌟', '💫'];
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'magic-particle';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }
}

// Smooth scrolling for better experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add entrance animations on scroll
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

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.card, .feature-card, .gallery-item');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Add some random floating hearts
setInterval(() => {
    if (Math.random() < 0.1) { // 10% chance every interval
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.fontSize = '1.5rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'floatUp 4s linear forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 4000);
    }
}, 3000);

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);