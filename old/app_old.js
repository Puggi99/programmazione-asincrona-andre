// DataService.getTodos(console.log)

//APP.JS E' IL LIVELLO PIU' ALTO DA CUI INIZIA IL PROGRAMMA

DataService.getTodos()                                               // riconosco che è una classa perchè ha la prima lettera maiuscola. Dalla classe viene chiamata la funzione getTodos(), ed è una funzione statica perchè non gli si da un oggetto                                 
    .then(data => {
        console.log('dati che arrivano dal server', data)
        return Todolist.fromObjectArray('lista figa', data)
    })            // 4 chiamate per le funzioni: GET: lettura dei dati; POST: fa una scrittura dei dati; PUT: fa la modifica dei dati; DELETE: fa la cancellazione dei dati
    .then(todoList => {
        console.log('todolist creata nel then precedente', todoList)
        addButtonsListeners(todoList);
        displayTodos(todoList)
    });

// function transformData(data) {

//     const newTodoList = new Todolist('Lista Base');
//     for (let i = 0; i < data.length; i++) {
//         const todoObject = data[i];
//         const newTodo = new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id)
//         newTodoList.addTodo(newTodo);
//     }
//     console.log(newTodoList)
// }

function displayTodos(todoList) {
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');

    const titleNode = document.createTextNode(todoList.title);
    todoListTitle.innerHTML = '';
    todoListTitle.appendChild(titleNode);

    todoListUl.innerHTML = '';

    for (let i = 0; i < todoList.todoArray.length; i++) {
        const todo = todoList.todoArray[i];
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');

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

        todoListUl.appendChild(newLi);

    }
}

function orderByTitle(todoList) {

    todoList.sortByTitle();
    displayTodos(todoList);
}

function orderByDate() {
    todoList.sortByCreationDate();
    displayTodos(todoList);
}

function addButtonsListeners(todoList) {
    const orderTitleBtn = document.getElementById('order-title-button');
    orderTitleBtn.addEventListener('click', (event) => orderByTitle(todoList));

    const orderDateBtn = document.getElementById('order-date-button');
    orderDateBtn.addEventListener('click', (event) => orderByDate(todoList));
}



