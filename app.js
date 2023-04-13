let superList = new Todolist('lista super figa');

displayTodos()

DataService.getTodos().then(data => {
    fillToDoArrayFromServer(data);
    displayTodos();
})

function fillToDoArrayFromServer(data) {
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const todo = new Todo(object.title, object.creationDate, object.isCompleted, object.id)
        superList.addTodo(todo);
    }
}

function displayTodos() {

    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');

    const titleNode = document.createTextNode(superList.title);
    todoListTitle.innerHTML = '';
    todoListTitle.appendChild(titleNode);

    todoListUl.innerHTML = '';

    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');
        if(todo.isCompleted){
            newLi.classList.add('completed')

        }

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('todo-title')

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('todo-date');


        const titleNode = document.createTextNode(todo.title);
        const dateNode = document.createTextNode(todo.creationDate);

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);

        const completeBtn = document.createElement('button');
        const completeText = document.createTextNode('complete');
        completeBtn.appendChild(completeText);
        completeBtn.addEventListener('click', (event) => {
            superList.completeTodo(todo);
            displayTodos();
        })

        const deleteBtn = document.createElement('button');
        const deleteText = document.createTextNode('remove');
        deleteBtn.appendChild(deleteText)
        deleteBtn.addEventListener('click', (event) => {
            superList.removeTodo(todo)
            displayTodos()
        })

        newLi.appendChild(completeBtn)
        newLi.appendChild(deleteBtn)

        todoListUl.appendChild(newLi);

    }

}

function orderByTitle() {
    superList.sortByTitle();
    displayTodos();
}

function orderByCreationDate() {
    superList.sortByCreationDate();
    displayTodos();
}

