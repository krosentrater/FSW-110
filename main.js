function submit() {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let dateOfBirth = document.getElementById('DOB').value;
    let result;
    result = alert('First Name: ' + firstName + '\n' + 'Last Name: ' + lastName + '\n' + 'Date of Birth: ' + dateOfBirth);
};
document.getElementById('submit-button').addEventListener('click', submit);
