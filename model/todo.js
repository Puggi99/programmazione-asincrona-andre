class Todo {

    constructor(title, creationDate, isCompleted = false, id) {
        this.title = title;
        this._creationDate = creationDate;
        this.isCompleted = isCompleted;
        if (id) {
            this.id = id;
        }
    }

    get creationDate() {                                                             // passo dai secondi alla data
        const millSec = this._creationDate * 1000;
        const date = new Date(millSec);
        return date
    }

    set creationDate(newDate) {                                                      // passo dalla data ai secondi
        const millSec = newDate.getTime();
        const seconds = millSec / 1000;
        this.creationDate = seconds;
    }

    compareByTitle(todo2) {
        return this.title.localeCompare(todo2.title);                              // usa il comparatore delle stringhe, prende il primo todo e lo compara con il titolo del secondo todo
    }

    compareByCreationDate(todo2) {
        if (this._creationDate > todo2._creationDate) {
            return 1;
        } else if (this._creationDate < todo2._creationDate) {
            return -1;
        } else {
            return 0;
        }
    }

    static fromTodoObject(todoObject) {
        return new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id);
    }


}