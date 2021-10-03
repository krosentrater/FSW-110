function submit() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = document.getElementById('age').value;
    let yesOrNo = document.querySelector('input[name="yes/no"]:checked').value;
    let rec = document.querySelector('input[name="recommend"]:checked').value;
    let answers = [];
    let checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (let i = 0; i < checkedBoxes.length; i++){
        answers.push(checkedBoxes[i].value);
    };
    alert('First Name: ' + fname + '\n' + 'Last Name: ' + lname + '\n' + 'Age: ' + age + '\n' + 'First Time Shopper: ' + yesOrNo + '\n' + 'Recommendation: ' + rec + '\n' + 'Favorite Thing(s): ' + answers);
};
document.getElementById('submit').addEventListener('click', submit);