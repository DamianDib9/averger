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

document.querySelector('#STP1').onclick = () => {
  const popupDiv1 = document.querySelector('#STP1div');
  popupDiv1.insertAdjacentHTML = 'html';
};

const popupProjects = [{
  picture: ['./img/HQproject1.svg'],
  projectName: ['Project 1'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: ['./img/HQproject2.svg'],
  projectName: ['Project 2'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: ['./img/HQproject3.svg'],
  projectName: ['Project 3'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: ['./img/HQproject4.svg'],
  projectName: ['Project 4'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: ['./img/HQproject5.svg'],
  projectName: ['Project 5'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
},

{
  picture: ['./img/HQproject6.svg'],
  projectName: ['Project 6'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['Html/CSS', 'Ruby on rails', 'JavaScrip'],
  seeLink: 'https://damiandib9.github.io/averger/',
  sourceLink: 'https://github.com/DamianDib9/averger',
}
];




  const button = document.querySelectorAll('.STP-button');
  button.forEach((i) => {
    i.addEventListener('click', () => {
      const popupContainer = document.querySelector('.popupContainer');

  popupProjects.forEach((index, id) => {
    const projectPopup = document.createElement('div');
    projectPopup.classList.add('.popup');
    projectPopup.innerHTML = `
    <div class="popupTextBox">
        <div class="popboxTitle">
            <h3 id="crossTypo" class="popProjectTitle"> X </h3>
            <h3 class="popProjectTitle"> ${index.projectName} </h3>
        </div>
        <div class="popCodingLangButtons">
            <ul class="lists">
                <li class="popupLang">${index.languages}</li>
                <li class="popupLang">${index.languages}</li>
                <li class="popupLang">${index.languages}</li>
            </ul>
        </div>
    </div>

    <div class="popPicture">
        <img class="popPicturesPreview" src="${index.picture}" alt="Project Number 1">
    </div>

    <div id="popupPdiv">
        <p class="popupP">
        ${index.description}
        </p>

        <div class="inlineBlockButton">
            <button type="button" id="popUnionButton" class="popupButtons" href="${index.seeLink}">
                <h4 class="popButText">See live</h4>
            </button>
            <button type="button" id="popGitHubButton" class="popupButtons" href="${index.sourceLink}">
                <h4 class="popButText"> See source</h4>
            </button>
        </div>
    </div>
`;
popupContainer.append(projectPopup);
    return projectPopup;
  });
    })
  })

  



  

