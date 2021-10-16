const comment = document.getElementById('comment');
const name = document.getElementById('name');
const submit = document.getElementById('submit');
const displayCommentsDiv = document.getElementById('commentsDisplay');
const displayComments = [];
//Set variables we are going to use.
function submission (e) {
    e.preventDefault();
    if (comment.value && name.value){
        let notification = {
            personComment: comment.value,
            personName: name.value,
        };
        comment.value = '';
        name.value = '';
        displayComments.push(notification);
        appendDom();
    } else {
        alert('Must first enter your name and comment!');
    };
};
submit.addEventListener('click', submission);
//If nothing input in textarea/input tags, alert. If there is text, runs appendDom function for loop. 

function appendDom () {
    displayCommentsDiv.innerHTML = '';
    for (let i = 0; i < displayComments.length; i++){
        let main = document.createElement('div');
        main.setAttribute('class', 'columns');

        let div = document.createElement('div');
        div.setAttribute('class', 'newly-created-div');
        //Create div for comments.

        let userName = document.createElement('h5');
        userName.textContent = displayComments[i].personName;
        //Creates name for user to be displayed as header tag.
        let userComments = document.createElement('p');
        userComments.textContent = displayComments[i].personComment;
        //Creates span tag for user.
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        //Creates delete button for comments.

        deleteButton.setAttribute('class', 'delete-button');
        deleteButton.setAttribute('data-value', [i]);
        //Attributes/class for delete button.

        main.appendChild(div);
        div.appendChild(userName);
        div.appendChild(userComments);
        div.appendChild(deleteButton);
        displayCommentsDiv.appendChild(div);
        //Appends every newly created element to html to display.
    };
};

document.body.addEventListener('click', function(e){
    e.preventDefault();
    if (e.target.matches('button') && e.target.getAttribute('id') !== 'submit'){
        let index = e.target.getAttribute('data-value');
        displayComments.splice(index, 1);
        appendDom();
    };
});
//Event listener for deleting specific comments in whichever order needed. Set data value and index # to identify each comment.