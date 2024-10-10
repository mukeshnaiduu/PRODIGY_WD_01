document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('.nav-list');

    // Function to toggle the mobile menu
    function toggleMenu() {
        navList.classList.toggle('show');
        navToggle.classList.toggle('active');
    }

    // Event listener for the mobile menu toggle
    navToggle.addEventListener('click', toggleMenu);

    // Function to handle scroll events
    function handleScroll() {
        if (window.scrollY > 20) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    }

    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Smooth scroll function
    function smoothScroll(target, duration) {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Add click event listeners to all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            smoothScroll(href, 500); // 500ms duration for the scroll animation

            // Close mobile menu if it's open
            if (navList.classList.contains('show')) {
                toggleMenu();
            }
        });
    });
});





echo "# PRODIGY_WD_01" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mukeshnaiduu/PRODIGY_WD_01.git
git push -u origin main