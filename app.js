const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu') 

//mobile menu fuctions
const mobileMenu = () => {
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);