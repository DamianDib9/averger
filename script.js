// When the menu button is clicked, display the pop-up navigation
document.querySelector('#menu').onclick = function () {
const popUpNav = document.querySelector('#popMenuCont');
popUpNav.style.display = 'flex';
}

// When the cross button is clicked, hide the pop-up navigation
document.querySelector('#cross').onclick = function () {
const popOutNav = document.querySelector('#popMenuCont');
popOutNav.style.display = 'none';
}

// When the "Hello" button is clicked, hide the pop-up navigation
document.querySelector('#popHello').onclick = function () {
const goToSection = document.querySelector('#popMenuCont');
goToSection.style.display = 'none';
}

// When the "Portfolio" button is clicked, hide the pop-up navigation
document.querySelector('#popPortfolio').onclick = function () {
const goToSection = document.querySelector('#popMenuCont');
goToSection.style.display = 'none';
}

// When the "About" button is clicked, hide the pop-up navigation
document.querySelector('#poppAbout').onclick = function () {
const goToSection = document.querySelector('#popMenuCont');
goToSection.style.display = 'none';
}

// When the "Contact" button is clicked, hide the pop-up navigation
document.querySelector('#poppContact').onclick = function () {
const goToSection = document.querySelector('#popMenuCont');
goToSection.style.display = 'none';
}