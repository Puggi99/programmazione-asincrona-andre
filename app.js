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
        if (todo.isCompleted) {
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
            DataService.putTodo(todo).then(updatedTodo =>{
                displayTodos();
            })

  
        })

        const deleteBtn = document.createElement('button');
        const deleteText = document.createTextNode('remove');
        deleteBtn.appendChild(deleteText)
        deleteBtn.addEventListener('click', (event) => {
            DataService.deleteTodo(todo).then(removedTodo =>{
                superList.removeTodo(todo)
                displayTodos()
            })
          
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


// COMPITO


// function displayTodos(){
//     const todoList = document.getElementById('todo-list');
//     todoList.innerHTML = '';
//     //todoListUl.innerHTML = '';

//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         todoList.innerHTML+= `<li class="todo-li">
//         ${todo.title}\n ${todo.creationDate} <br>
//         <button class="complete-btn" id="complete-btn${i}" onclick="superList.completeTodo()">Completa</button> <br>
//         <button class="remove-btn" id="remove-btn${i}">Rimuovi</button>
//         </li>`
//     }

//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         document.getElementById("remove-btn" + i).addEventListener('click', (todo) => superList.removeTodo(todo));
//     }
// }


// CORREZZIONE

// function displayTodos2() {
//     const todoListTitle = document.getElementById('list-name')
//     todoListTitle.innerHTML = superList.title;
//     const todoListUl = document.getElementById('todo-list');
//     const htmlTemplate = ``;
//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const element = superList.todoArray[i];
//         todoListUl.innerHTML += `<li class ="todo-li ${element.isCompleted ? 'completed' : ''}"> 
//                                       <span class = "todo-title">${element.title}</span>
//                                       <span class = "todo-date">${element.creationDate}</span>
//                                       <button id = "complete-btn"${i}">Completed</button>
//                                       <button id = "delete-btn${i}">Delete</button>
//                                 </li>`
//     }

//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const element = superList.todoArray[i];
//         const completeButton = ("complete-btn${i}");
//         const deleteButton = ("delete-btn${i}");

//         completeButton.addEventListener('click', (event) =>{
//             superList.completeTodo(element);
//             displayTodos2();
//         })

//         deleteButton.addEventListener('click', (event) =>{
//             superList.removeTodo(element);
//             displayTodos2();
//         })
//     }
// }



// function displayTodos3() {
//     displayListTitle();
//     const todoListUl = document.getElementById('todo-list');

//     todoListUl.innerHTML = '';

//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         const newLi = document.createElement('li');
//         newLi.classList.add('todo-li');
//         if (todo.isCompleted) {
//             newLi.classList.add('completed')

//         }

//         newLi.appendChild(createToDoTitleSpan(todo));
//         newLi.appendChild(createToDoDateSpan(todo));


//         newLi.appendChild(completeBtn(todo));
//         newLi.appendChild(deleteBtn(todo));

//         todoListUl.appendChild(newLi);

//     }

// }


// function displayListTitle() {
//     const todoListTitle = document.getElementById('list-name');
//     const titleNode = document.createTextNode(superList.title);
//     todoListTitle.innerHTML = '';
//     todoListTitle.appendChild(titleNode);
// }

// function createToDoTitleSpan(todo) {
//     const titleSpan = document.createElement('span');
//     titleSpan.classList.add('todo-title');
//     const titleNode = document.createTextNode(todo.title);
//     titleSpan.appendChild(titleNode);
//     return titleSpan;
// }

// function createToDoDateSpan(todo) {
//     const dateSpan = document.createElement('span');
//     dateSpan.classList.add('todo-date');
//     const dateNode = document.createTextNode(todo.creationDate);
//     dateSpan.appendChild(dateNode);
//     return dateSpan;
// }

// function createCompleteButton(todo) {
//     const completeBtn = document.createElement('button');
//     const completeText = document.createTextNode('complete');
//     completeBtn.appendChild(completeText);
//     completeBtn.addEventListener('click', (event) => {
//         superList.completeTodo(todo);
//         displayTodos();
//     })
//     return completeBtn;
// }

// function createRemoveButton(){
//     const deleteBtn = document.createElement('button');
//     const deleteText = document.createTextNode('remove');
//     deleteBtn.appendChild(deleteText)
//     deleteBtn.addEventListener('click', (event) => {
//         superList.removeTodo(todo)
//         displayTodos()
//     })
//     return deleteBtn;
// }



