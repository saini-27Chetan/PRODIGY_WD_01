const navbar = document.getElementById('navbar');
const aboutSection = document.getElementById('about').offsetTop;
const contactSection = document.getElementById('contact').offsetTop;
const offset=100;

window.addEventListener('scroll', function () {
    if (window.scrollY >= contactSection - offset) {
        navbar.style.backgroundColor = 'rgb(90, 0, 129)';
    } else if (window.scrollY >= aboutSection - offset) {
        navbar.style.backgroundColor = 'rgb(110, 30, 170)';
    } else {
        navbar.style.backgroundColor = 'rgb(173, 103, 239)';
    }
});

