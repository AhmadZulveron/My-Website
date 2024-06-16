// Navbar fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function() {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
})

//Animation slide in-out
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // entry.target.querySelector('.slide-in-top')
                // entry.target.querySelector('.slide-in-top').classList.add('slide-in-top');

                entry.target.querySelector('.left-content').classList.add('visible', 'slide-out-left');
                entry.target.querySelector('.left-content').classList.remove('slide-in-left');

                entry.target.querySelector('.right-content').classList.add('visible', 'slide-out-right');
                entry.target.querySelector('.right-content').classList.remove('slide-in-right');
            } else {
                entry.target.querySelector('.left-content').classList.remove('visible', 'slide-out-left');
                entry.target.querySelector('.left-content').classList.add('slide-in-left');

                entry.target.querySelector('.right-content').classList.remove('visible', 'slide-out-right');
                entry.target.querySelector('.right-content').classList.add('slide-in-right');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
