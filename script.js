const toDoContainer = document.getElementById('items');
const addTaskButton = document.getElementById('addTask');
const deleteButtons = document.getElementsByClassName('delete');
const items = document.querySelector('#items').children;
console.dir(items);

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


for (let i = 0; i < deleteButtons.length; i++) {
    const deleteButton = deleteButtons[i];
    deleteButton.addEventListener('click', function () {
        this.parentNode.remove();
    });
}
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // if(items[i])
    item.addEventListener('click', function () {
        const newList = document.createElement('li');
        const createButton = document.createElement('button');

        newList.classList.add('item');
        createButton.classList.add('delete');
        
        createButton.innerText='Delete';
        newList.innerText=item.innerText;

        newList.appendChild(createButton);
        completeListContainer.appendChild(newList);
    });
}