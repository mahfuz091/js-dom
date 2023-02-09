const title = document.getElementById('fruits-title');
title.setAttribute('title', 'tooltip by javascript');

const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid red';
    section.style.background = 'lightgray';
    section.style.borderRadius = '15px';
    section.style.marginBottom = '10px';

}
const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = "yellow";
placesContainer.classList.add("text-center");