const toDoContainer = document.getElementById('items');
const addTaskButton = document.getElementById('addTask');
const deleteButtons = document.getElementsByClassName('delete');

const completeListContainer = document.querySelector('.complete-list ul');
console.log(completeListContainer);

console.dir(deleteButtons);

const addTask = (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('new-task');
    const task = taskInput.value;

    if (task.length == 0) {
        alert('Please Enter a Task.');
        return;
    }
    const newList = document.createElement('li');
    const inputField = document.createElement('input');
    const newLabel = document.createElement('label');


    newList.classList.add('item');
    inputField.type = 'checkbox';
    newLabel.innerText = task;

    newList.appendChild(inputField);
    newList.appendChild(newLabel);
    toDoContainer.appendChild(newList);

};

addTaskButton.addEventListener('click', addTask);


completeListContainer.addEventListener('click', function (e) {
    const target= e.target;
    const parentNode= target.parentNode;
    if(target.classList.contains('delete')){
        parentNode.remove();
    }
});


toDoContainer.addEventListener('click', function (e) {
    console.dir(e.target);
    const item=e.target.parentNode;
    if (item.classList.contains('item')) {
        const newList = document.createElement('li');
        const createButton = document.createElement('button');

        newList.classList.add('item');
        createButton.classList.add('delete');

        createButton.innerText = 'Delete';
        newList.innerText = item.innerText;

        newList.appendChild(createButton);
        completeListContainer.appendChild(newList);
        item.remove();
    }
});