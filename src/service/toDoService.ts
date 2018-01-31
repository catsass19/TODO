import {observable, action} from "mobx";

interface ToDoItemInterface {
    content : string;
    completed : boolean;
}

class ToDoServiceClass {

    @observable public showCompleted : boolean = true;
    @observable public showPending : boolean = true;
    @observable public toDoItems : Array<ToDoItemInterface> = [];

    @action
    public addTODO(content : string) {
        this.toDoItems.push({
            content,
            completed: false
        });
    }

}

export default new ToDoServiceClass();
