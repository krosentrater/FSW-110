function add() {
    let num1 = document.getElementById('add-one').value;
    let num2 = document.getElementById('add-two').value;
    let result;
    result = (Number(num1) + Number(num2));
    document.getElementById('add-result').value = result;
};
document.getElementById('add').addEventListener('click', add);

function sub () {
    let num1 = document.getElementById('sub-one').value;
    let num2 = document.getElementById('sub-two').value;
    let result;
    result = (Number(num1) - Number(num2));
    document.getElementById('sub-result').value = result;
};
document.getElementById('sub').addEventListener('click', sub);

function mult () {
    let num1 = document.getElementById('mult-one').value;
    let num2 = document.getElementById('mult-two').value;
    let result;
    result = (Number(num1) * Number(num2));
    document.getElementById('mult-result').value = result;
};
document.getElementById('mult').addEventListener('click', mult);