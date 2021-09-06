const h1Tag = document.createElement('h1');
const h1Text = document.createTextNode('Welcome to my JS site!'); 
h1Tag.appendChild(h1Text);

let heading = document.getElementById('num1'); 
heading.appendChild(h1Tag);
//adding h1

const pTag = document.createElement('p');
const pText = document.createTextNode('All of this was created with JavaScrip:');
pTag.appendChild(pText);

let paragraph = document.querySelector('#num2');
paragraph.appendChild(pTag);
//adding p

const myList = document.createElement('li');
const liText = document.createTextNode('Create new element.');
myList.appendChild(liText);

let li1 = document.getElementById('list');
li1.appendChild(myList);
//li1
const myList2 = document.createElement('li');
const liText2 = document.createTextNode('Create text for new element.');
myList2.appendChild(liText2);

let li2 = document.getElementById('list');
li2.appendChild(myList2);
//li2
const myList3 = document.createElement('li');
const liText3 = document.createTextNode('Append text for the new element to the new element.');
myList3.appendChild(liText3);

let li3 = document.getElementById('list');
li3.appendChild(myList3);
//li3
console.log(document);