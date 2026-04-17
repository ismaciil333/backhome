// Language toggle UI
const langBtns = document.querySelectorAll('.lang-btn');

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        langBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        btn.classList.add('active');
    });
});

// Form submission UI handling (prevent reload)
const form = document.getElementById('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = 'Joined Waitlist!';
        btn.style.backgroundColor = '#4caf50';
        
        setTimeout(() => {
            btn.textContent = 'Join the waitlist';
            btn.style.backgroundColor = '';
            form.reset();
        }, 3000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
