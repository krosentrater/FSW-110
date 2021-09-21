const square = document.querySelector('.square');

window.onload = function onLoad(){
    document.querySelector('.square').style.backgroundColor = 'black';
};
//onload event complete
function mouseOver(){
    document.querySelector('.square').style.backgroundColor = 'green';
};
square.addEventListener('mouseover', mouseOver);
//mouseover event complete

function holdClick (){
    document.querySelector('.square').style.backgroundColor = 'yellow';
    setTimeout(function(){

    }, 500);
};
square.addEventListener('mousedown', holdClick);
//mousedown event complete

function letGoOfMouseButton(){
    document.querySelector('.square').style.backgroundColor = 'blue';
};
square.addEventListener('mouseup', letGoOfMouseButton);
//mouseup event complete

function doubleClick(){
    document.querySelector('.square').style.backgroundColor = 'red';
};
square.addEventListener('dblclick', doubleClick);
//dblclick event complete

function mouseScroll(){
    document.querySelector('.square').style.backgroundColor = 'purple';
};
square.addEventListener('wheel', mouseScroll);
//mouseScroll event complete

document.addEventListener('keypress', function(event){
    let key = event.key;
    if (key == 'r'){
        document.querySelector('.square').style.backgroundColor = 'red';
    }
    else if (key == 'b'){
        document.querySelector('.square').style.backgroundColor = 'black';
    }
    else if (key == 'g'){
        document.querySelector('.square').style.backgroundColor = 'green';
    }
    else if (key == 'w'){
        document.querySelector('.square').style.backgroundColor = 'white';
    }
    else if (key == 'y'){
        document.querySelector('.square').style.backgroundColor = 'yellow';
    }
    else if (key == 'b'){
        document.querySelector('.square').style.backgroundColor = 'blue';
    }
    else if (key == 'p'){
        document.querySelector('.square').style.backgroundColor = 'purple';
    }
});
//key board key events done