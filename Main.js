let h1Tag = document.createElement('h1');
let h1Text = document.createTextNode('Hello World');
h1Tag.appendChild(h1Text);
const h1 = document.querySelector('body');
h1.appendChild(h1Tag);

for (let i = 0; i < 10; i++) {
    const elements = document.createElement('h1');
    elements.innerHTML = 'Hello World';
    elements.style.color = 'purple';
    elements.style.backgroundColor = 'yellow';
    elements.style.border = 'thick solid gray';
    document.body.appendChild(elements);
};

const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];
for (let i = 0; i < names.length; i++) {
    const listArray = document.createElement('li');
    listArray.innerHTML = names[i];
    listArray.style.textTransform = 'capitalize';
    listArray.style.border = 'thin solid black';
    listArray.style.fontSize = 'x-large';
    listArray.style.backgroundColor = '#EE6E3C';
    document.body.appendChild(listArray);
};
