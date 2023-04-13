class DataService {

    // static getTodos(callback) {
    //     fetch('https://643694673e4d2b4a12d616bf.mockapi.io/ToDo')
    //         .then(resp => resp.json())
    //         .then(data => callback(data))
    // }

    static getTodos() {
        return fetch('https://643694673e4d2b4a12d616bf.mockapi.io/ToDo')
            .then(resp => resp.json())
    }


    // static postTodo(todo){

    // }

    // static putTodo(todo){

    // }

    // static deleteTodo(todo){

    // }


}