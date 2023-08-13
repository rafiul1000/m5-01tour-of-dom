// where to add
const placesList = document.getElementById('places-list');

// what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon'

// add the child
placesList.appendChild(li);

// ================================================================================
// 1


// কোথায় add করতে হবে
// ============================================================================
const mainContainer = document.getElementById('main-container');
// ============================================================================

// 2
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);
const ul = document.createElement('ul');

// item add করানোর জন্য
// =====================================================
const li1 = document.createElement('li');
li1.innerText = 'biryani'
ul.appendChild(li1);
// =====================================================

// item add করানোর জন্য
// =====================================================
const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);
// =====================================================

// item add করানোর জন্য
// =====================================================
const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li3);
// ====================================================

// item show করানোর জন্য
// ======================================
section.appendChild(ul)
// ======================================
mainContainer.appendChild(section);




// set innerHTML directly:

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My Dress Section</h1>
    <ul>
        <li>T-shirt</li>
        <li>Lungi</li>
        <li>Pant</li>
    </ul>
`

// item show করানোর জন্য
// ====================================================
mainContainer.appendChild(sectionDress)
// ====================================================