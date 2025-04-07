/*======= SHOW MENU =======*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon');
    });

    // Close menu when clicking on any nav link
    const navLinks = document.querySelectorAll(`#${navId} .navM__link`);
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show-menu');
            toggle.classList.remove('show-icon');
        });
    });
};

showMenu('navM-toggle', 'navM-menu');


/*==================== CAMBIAR IDIOMA ====================*/
const flagsElement = document.querySelector('#flags');
const textsToChange = document.querySelectorAll('[data-section]');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');

// Función para cambiar el idioma y guardar la preferencia en localStorage
const setLanguage = (language) => {
    flagsElement.setAttribute('data-language', language);
    localStorage.setItem('selectedLanguage', language);
    changeLanguages(language);
    
    inputName.placeholder = language === 'esp' ? 'Tu nombre' : 'Your name';
    inputEmail.placeholder = language === 'esp' ? 'Tu correo electrónico' : 'Your email';
    inputMessage.placeholder = language === 'esp' ? 'La descripción de tu proyecto' : 'Your project description';
};

// Escuchar el cambio de checkbox y actualizar idioma
flagsElement.addEventListener('change', (e) => {
    let language = e.target.checked ? 'esp' : 'eng';
    setLanguage(language);
});

// Cargar el idioma guardado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    let savedLanguage = localStorage.getItem('selectedLanguage') || 'eng'; // Idioma predeterminado: inglés
    flagsElement.checked = savedLanguage === 'esp';
    setLanguage(savedLanguage);
});

// Toma el JSON y modifica el idioma
const changeLanguages = async (language) => {
    const requestJson = await fetch(`./build/languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
};

/*======= Actualizar año footer =======*/
document.getElementById("year").textContent = new Date().getFullYear();