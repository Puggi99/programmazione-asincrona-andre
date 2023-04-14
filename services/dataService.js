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

    static putTodo(todo){                                                                           // modifica il todo, dandogliene uno nuovo. il sistema li compara e vede qual è la modifica, apportandola.
        const jsonTodo = JSON.stringify(todo.toDbModel())
        return fetch('https://643694673e4d2b4a12d616bf.mockapi.io/ToDo/' + todo.id, {method: "PUT", body: jsonTodo, headers: {'content-type': 'application/json'}}) //gli headers spiegano al backend alcune cose, spiega che tipo di payload sto mandando.
            .then(resp => resp.json());
    }

    static deleteTodo(todo){                                                                        // semplicemente elimina il dato che gli dico di eliminare.
        return fetch('https://643694673e4d2b4a12d616bf.mockapi.io/ToDo/' + todo.id, {method: "DELETE"})
            .then(resp => resp.json());
    }


}