// When the menu button is clicked, display the pop-up navigation
document.querySelector('#menu').onclick = () => {
  const popUpNav = document.querySelector('#popMenuCont');
  popUpNav.style.display = 'flex';
};

// When the cross button is clicked, hide the pop-up navigation
document.querySelector('#cross').onclick = () => {
  const popOutNav = document.querySelector('#popMenuCont');
  popOutNav.style.display = 'none';
};

// When the "Hello" button is clicked, hide the pop-up navigation
document.querySelector('#popHello').onclick = () => {
  const goToSection = document.querySelector('#popMenuCont');
  goToSection.style.display = 'none';
};

// When the "Portfolio" button is clicked, hide the pop-up navigation
document.querySelector('#popPortfolio').onclick = () => {
  const goToSection = document.querySelector('#popMenuCont');
  goToSection.style.display = 'none';
};

// When the "About" button is clicked, hide the pop-up navigation
document.querySelector('#poppAbout').onclick = () => {
  const goToSection = document.querySelector('#popMenuCont');
  goToSection.style.display = 'none';
};

// When the "Contact" button is clicked, hide the pop-up navigation
document.querySelector('#poppContact').onclick = () => {
  const goToSection = document.querySelector('#popMenuCont');
  goToSection.style.display = 'none';
};

const popupProjects = [{
  picture: 'img/HQproject1.svg',
  projectName: 'Project 1',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject2.svg',
  projectName: 'Project 2',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject3.svg',
  projectName: 'Project 3',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject4.svg',
  projectName: 'Project 4',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject5.svg',
  projectName: 'Project 5',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject6.svg',
  projectName: 'Project 6',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html', 'Ruby on rails', 'JavaScrip', 'CSS'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},
];

const button = document.querySelectorAll('.STP-buttons');
const popupContainer = document.querySelector('.popupContainer');

button.forEach((i, indice) => {
  i.addEventListener('click', () => {
    const damian = `<div class="popupTextBox">
          <div class="popboxTitle">
              <h3 id="crossTypo" class="popProjectTitle"> X </h3>
              <h3 class="popProjectTitle"> ${popupProjects[indice].projectName} </h3>
          </div>
          <div class="popCodingLangButtons">
              <ul class="lists">
                  <li class="popupLang">${popupProjects[indice].languages[0]}</li>
                  <li class="popupLang">${popupProjects[indice].languages[1]}</li>
                  <li class="popupLang">${popupProjects[indice].languages[2]}</li>
              </ul>
          </div>
      </div>
  
      <div class="popPicture">
          <img class="popPicturesPreview" src="${popupProjects[indice].picture}" alt="Project Number 1">
      </div>
  
      <div id="popupPdiv">
          <p class="popupP">
          ${popupProjects[indice].description}
          </p>
  
          <div class="inlineBlockButton">
          <a href="${popupProjects[indice].seeLink}">
              <button type="button" id="popUnionButton" class="popupButtons">
                  <h4 class="popButText">See live</h4>
              </button>
              </a>

              <a href="${popupProjects[indice].sourceLink}">
              <button type="button" id="popGitHubButton" class="popupButtons">
                  <h4 class="popButText"> See source</h4>
              </button>
              </a>
          </div>
      </div>`;

    popupContainer.innerHTML = damian;
    popupContainer.classList.add('popup');

    const closex = document.getElementById('crossTypo');
    closex.addEventListener('click', () => {
      popupContainer.classList.remove('popup');
    });
  });
});

// REPETICION

const popupProjectsDesk = [{
  picture: 'img/HQproject1.svg',
  projectName: 'Project 1',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject2.svg',
  projectName: 'Project 2',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject3.svg',
  projectName: 'Project 3',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject4.svg',
  projectName: 'Project 4',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject5.svg',
  projectName: 'Project 5',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: 'img/HQproject6.svg',
  projectName: 'Project 6',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html', 'Ruby on rails', 'JavaScrip', 'CSS'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},
];

const button2 = document.querySelectorAll('.STP-button');
const popupContainerDesk = document.querySelector('.popupContainer2');

button2.forEach((i, indice2) => {
  i.addEventListener('click', () => {
    const damian2 = ` <div class="superPopUpCont">
    <div class="popupTextBox">
          <div class="popboxTitle">
              <h3 id="crossTypo2" class="popProjectTitle"> X </h3>
              <h3 class="popProjectTitle"> ${popupProjectsDesk[indice2].projectName} </h3>
          </div>
          <div class="popCodingLangButtons">
              <ul class="lists">
                  <li class="popupLang">${popupProjectsDesk[indice2].languages[0]}</li>
                  <li class="popupLang">${popupProjectsDesk[indice2].languages[1]}</li>
                  <li class="popupLang">${popupProjectsDesk[indice2].languages[2]}</li>
              </ul>
          </div>
      </div>
  
      <div class="popPicture">
          <img class="popPicturesPreview" src="${popupProjectsDesk[indice2].picture}" alt="Project Number 1">
      </div>
  
      <div id="popupPdiv">
          <p class="popupP">
          ${popupProjectsDesk[indice2].description}
          </p>
  
          <div class="inlineBlockButton">
          <a href="${popupProjectsDesk[indice2].seeLink}">
              <button type="button" id="popUnionButton" class="popupButtons">
                  <h4 class="popButText">See live</h4>
              </button>
              </a>

              <a href="${popupProjectsDesk[indice2].sourceLink}">
              <button type="button" id="popGitHubButton" class="popupButtons">
                  <h4 class="popButText"> See source</h4>
              </button>
              </a>
          </div>
      </div>
      </div>`;

    popupContainerDesk.innerHTML = damian2;
    popupContainerDesk.classList.add('popup');

    const closex2 = document.getElementById('crossTypo2');
    closex2.addEventListener('click', () => {
      popupContainerDesk.classList.remove('popup');
    });
  });
});

const formVal = document.getElementById('contactForm');

function notLowercase(arg) {
  if (arg.match(/^[a-z@.0-9-_]*$/)) {
    return false;
  }
  return true;
}

formVal.addEventListener('submit', (event) => {
  event.preventDefault();
  const errorMessage = document.getElementById('alertP');

  if (notLowercase(formVal.elements.email.value)) {
    const alertMessage = 'Please write your email in lowercase eg.(myemail@mydomain.com)';
    errorMessage.innerHTML = alertMessage;
    errorMessage.classList.add('alertPmessage');
  } else {
    errorMessage.innerHTML = '';
    errorMessage.classList.remove('alertPmessage');
    formVal.submit();
  }
});