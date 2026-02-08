document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
}, false);

document.addEventListener('DOMContentLoaded', () => {
    const scrollUpBtn = document.getElementById('scroll-up');

    function scrollUp() {
       
        if (window.scrollY >= 300) {
            scrollUpBtn.classList.add('show-scroll');
        } else {
            scrollUpBtn.classList.remove('show-scroll');
        }
    }

    window.addEventListener('scroll', scrollUp);

    const navToggle = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

    const navLinks = document.querySelectorAll('li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });
});

