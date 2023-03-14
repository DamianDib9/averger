document.querySelector('#menu').onclick = function () {
  const popUpNav = document.querySelector('#popMenuCont');
  popUpNav.style.display = 'flex';
}

document.querySelector('#cross').onclick = function () {
  const popOutNav = document.querySelector('#popMenuCont');
  popOutNav.style.display = 'none';
}

document.querySelector('#popHello').onclick = function () {
  const goToSection = document.querySelector('#popMenuCont');
  goToSection.style.display = 'none';
}

document.querySelector('#popPortfolio').onclick = function () {
  const goToSection = document.querySelector('#popMenuCont');
  goToSection.style.display = 'none';
}
document.querySelector('#poppAbout').onclick = function () {
  const goToSection = document.querySelector('#popMenuCont');
  goToSection.style.display = 'none';
}
document.querySelector('#poppContact').onclick = function () {
  const goToSection = document.querySelector('#popMenuCont');
  goToSection.style.display = 'none';
}
