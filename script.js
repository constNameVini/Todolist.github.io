let inputField = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let removeToDoBtn = document.getElementById("removeToDo")
addToDo.addEventListener('click', function(){

    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function(){

        paragraph.style.textDecoration = "line-through";

    })

    paragraph.addEventListener('dblclick', function(){

        toDoContainer.removeChild(paragraph);
    })
    removeToDoBtn.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph)
    })


})

function giveTips(){
    alert("TO REMOVE A ToDo CLICK TWICE, IF YOU ALREDY DID IT CLICK ONCE")
}