const toDoContainer = document.getElementById('items');
const addTaskButton = document.getElementById('addTask');
const deleteButtons= document.getElementsByClassName('delete');
const deleteButtonsLength= deleteButtons.length;
console.dir(deleteButtons);

const addTask = (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('new-task');
    const task = taskInput.value;

    if(task.length==0) {
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

const addToCompleted = ()=>{

}

// deleteButton.addEventListener('click',function(){
//     this.remove();
//     console.log('delete clicked');
// })
for(let i=0;i<deleteButtonsLength;i++){
    const deleteButton= deleteButtons[i];
    deleteButton.addEventListener('click',function(){
        this.parentNode.remove();
    });
}