'use strict';

const taskInput = document.querySelector('.task-input');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('.create-task-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (taskInput.value.trim() === '') {
        taskInput.value = '';
        return;
    }

    createSingleTaskElement(taskInput.value);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
})

clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure?')) {
        localStorage.clear();
        tasksList.innerHTML = '';
    }
})

function createSingleTaskElement(taskInput) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput));

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = ' <i class="bi bi-x-circle text-danger"></i>';
    li.appendChild(deleteElement);
    tasksList.appendChild(li);

    deleteElement.addEventListener('click', (event) => {
        const index = Array.from(deleteElement.parentNode.parentNode.children).indexOf(deleteElement.parentNode);
        li.remove();
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    const editElement = document.createElement('span');
    editElement.className = 'edit-item';
    editElement.innerHTML = ' <i class="bi bi-pencil-square text-warning"></i>';
    li.appendChild(editElement);

    editElement.addEventListener('click', () => {
        const editTask = prompt("Edit your task", li.firstChild.textContent);
        if (editTask === null) {
            return;
        }     
        li.firstChild.textContent = editTask;
        const index = Array.from(editElement.parentNode.parentNode.children).indexOf(editElement.parentNode);
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.splice(index, 1, editTask);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })
}

function storeTaskInLocalStorage(task) {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
