
//DARKMODE
const body = document.querySelector('body');
const darkModeBg = document.querySelector('.darkMode-bg');
const darkModeIcon = document.querySelector('.darkMode-icon');
const contactButton = document.querySelector('.contact-button');

darkModeIcon.onclick = function () {
    darkModeBg.classList.toggle("darkMode-bg-active");
    contactButton.classList.toggle("contact-button-darkMode");
    body.classList.toggle("light");
};

//WIZZSOUND
function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
};

