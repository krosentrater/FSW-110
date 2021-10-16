// make the box disapear when the user clicks it

function beGoneBox () {
    let box = document.querySelector('.red-box');
    box.style.display = 'none';
}
document.querySelector('.red-box').addEventListener('click', beGoneBox);