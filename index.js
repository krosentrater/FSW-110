const navBar = document.querySelector('#body');
let nav = document.createElement('a');
nav.setAttribute('href', 'file:///C:/Users/Kyle/Desktop/School/Classes/FSW-110/Week2/Create%20Basic%20Website%20w_JS/index.html');
nav.textContent = 'Home | ';
navBar.appendChild(nav);

let nav2 = document.createElement('a');
nav2.setAttribute('href', 'https://www.w3schools.com/');
nav2.textContent = 'Sources | ';
navBar.appendChild(nav2);

let nav3 = document.createElement('a');
nav3.setAttribute('href', '');
nav3.textContent = 'Etc... | ';
navBar.appendChild(nav3);

let h1Tag = document.createElement('h1');
let h1Text = document.createTextNode('H1 tag created with JavaScript');
h1Tag.appendChild(h1Text);

const h1 = document.querySelector('#body');
h1.appendChild(h1Tag);
// Create H1 Tag Done

let pTag = document.createElement('p');
let pText = document.createTextNode('This paragraph has been brought to you by JavaScript.');
pTag.appendChild(pText);

const p = document.querySelector('#body');
p.appendChild(pTag);
// Create P Tag Done

let li1 = document.createElement('li');
let li1Text = document.createTextNode('First Item on List');
li1.appendChild(li1Text);

const li1Tag = document.querySelector('#body');
li1Tag.appendChild(li1);

let li2 = document.createElement('li');
let li2Text = document.createTextNode('Second Item on List');
li2.appendChild(li2Text);

const li2Tag = document.querySelector('#body');
li2Tag.appendChild(li2);

let li3 = document.createElement('li');
let li3Text = document.createTextNode('Third Item on List');
li3.appendChild(li3Text);

const li3Tag = document.querySelector('#body');
li3Tag.appendChild(li3); 
// Create List Done

let footer = document.createElement('footer');
let footerText = document.createTextNode('Website Design: Kyle Rosetrater');
footer.appendChild(footerText);

const footerTag = document.querySelector('#body');
footerTag.appendChild(footer);
// Create Footer Done