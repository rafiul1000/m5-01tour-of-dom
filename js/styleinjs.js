const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid tomato';
    section.style.marginTop = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '50px';
    section.style.backgroundColor = 'lightGray';
    // console.log(section.innerHTML);
    // console.log(section.innerText);
}

// const placesTitle = document.getElementById('places-title');
// placesTitle.style.backgroundColor = 'yellow';

// const awesomeContainer = document.getElementById('awesome');
// awesomeContainer.style.backgroundColor = 'red'

const placesTitle = document.getElementById('places-title');
placesTitle.classList.add('yellow-bg');