const body = document.querySelector('body');
const darkModeBg = document.querySelector('.darkMode-bg');
const darkModeIcon = document.querySelector('.darkMode-icon');
const contactButton = document.querySelector('.contact-button');

darkModeIcon.onclick = function(){
    darkModeBg.classList.toggle("darkMode-bg-active");
    contactButton.classList.toggle("contact-button-darkMode");
    body.classList.toggle("light");

    // if (body.style.color = "black"){
    //     body.style.color = "white";
    //     console.log("is black");
    // } else if(body.style.color = "white"){
    //     body.style.color ="black";
    //     console.log("is white");
    // }
};