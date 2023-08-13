console.log('second.js');

// 1st:  কোথায় সেট করবো

const secondList = document.getElementById('second-list');

// 2nd: কি add করবো

const li = document.createElement('li');
li.innerText = 'My Dynamic Item';


// 03: connection

secondList.appendChild(li);

