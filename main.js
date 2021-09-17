console.log('I am attached!');

for (let i = 0; i < 5; i++) {
    const newEle = document.createElement('h2');
    newEle.classList.add('border');
    newEle.textContent = 'Changing Styles and Classes Using JS!';
    newEle.style.fontSize = '20px';
    newEle.style.fontWeight = 'lighter';
    newEle.style.fontFamily = 'sans-serif';
    newEle.style.color = 'cornflowerblue';
    document.body.appendChild(newEle);
};
