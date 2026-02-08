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

const characterData = [
    { id: 1, infoImage: "./img/alice info.png", mobileImg:"./img/alice info hz.png",unlocked: true },
    { id: 2, infoImage: "./img/benedict info.png", mobileImg:"./img/benedict info hz.png", unlocked: true },
    { id: 3, infoImage: "./img/locked.png", unlocked: false },
    { id: 4, infoImage: "./img/locked.png", unlocked: false },
    { id: 5, infoImage: "./img/locked.png", unlocked: false },
    { id: 6, infoImage: "./img/locked.png", unlocked: false },
    { id: 7, infoImage: "./img/locked.png", unlocked: false },
    { id: 8, infoImage: "./img/locked.png", unlocked: false },
    { id: 9, infoImage: "./img/locked.png", unlocked: false },
    { id: 10, infoImage: "./img/locked.png", unlocked: false },
    { id: 11, infoImage: "./img/locked.png", unlocked: false },
    { id: 12, infoImage: "./img/locked.png", unlocked: false },
    { id: 13, infoImage: "./img/locked.png", unlocked: false },
    { id: 14, infoImage: "./img/locked.png", unlocked: false },
    { id: 15, infoImage: "./img/locked.png", unlocked: false }];

let currentId=1;

function initProfile() {
    const params = new URLSearchParams(window.location.search);
    const charIdFromUrl = parseInt(params.get('char'));
    const displayImg = document.getElementById('display-page');

    let selectedChar;

    if (charIdFromUrl) {
        selectedChar = characterData.find(c => c.id === charIdFromUrl);
    }

    if (!selectedChar || !selectedChar.unlocked) {
        selectedChar = characterData[0];
    }

    currentId = selectedChar.id;
    displayImg.src = getResponsiveImage(selectedChar);
}

function getResponsiveImage(character) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && character.mobileImg) {
        return character.mobileImg;
    }
    return character.infoImage;
}

function changePage(direction) {

    const displayImg = document.getElementById('display-page');
    if (direction === 1) {
        displayImg.classList.add('exit-left');
    } else {
        displayImg.classList.add('exit-right');
    }

    setTimeout(() => {
        let currentIndex = characterData.findIndex(c => c.id === currentId);
        let nextIndex = currentIndex;

        do {
            nextIndex += direction;
            if (nextIndex >= characterData.length) nextIndex = 0;
            if (nextIndex < 0) nextIndex = characterData.length - 1;
        } while (!characterData[nextIndex].unlocked); 
        
        const nextChar = characterData[nextIndex];
        displayImg.src = getResponsiveImage(nextChar);
        currentId = nextChar.id;

        displayImg.style.transition = 'none';
        displayImg.classList.remove('exit-left', 'exit-right');

        if (direction === 1) {
            displayImg.classList.add('enter-from-right');
        } else {
            displayImg.classList.add('enter-from-left');
        }
        
        displayImg.offsetWidth;
        displayImg.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
        displayImg.classList.remove('enter-from-right', 'enter-from-left');
    }, 400);
}

initProfile();

