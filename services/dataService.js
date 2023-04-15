class DataService {

    // static getTodos(callback) {
    //     fetch('https://643694673e4d2b4a12d616bf.mockapi.io/ToDo')
    //         .then(resp => resp.json())
    //         .then(data => callback(data))
    // }

    constructor(){}

    static getTodos() {
        return fetch('https://643694673e4d2b4a12d616bf.mockapi.io/ToDo')
            .then(resp => resp.json());
    }


    // static postTodo(todo){

    // }

    static putTodo(todo){

        const jsonTodo = JSON.stringify(todo.toDbModel());
        return fetch('https://643694673e4d2b4a12d616bf.mockapi.io/ToDo/' + todo.id, {method: 'PUT', body: jsonTodo, headers: {'content-type':'application/json'}})
            .then(resp => resp.json());
    }

    static deleteTodo(todo){
        return fetch('https://643694673e4d2b4a12d616bf.mockapi.io/ToDo/' + todo.id, {method: 'DELETE'})
            .then(resp => resp.json());
    }


}