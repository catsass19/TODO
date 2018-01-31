import {observable, action} from "mobx";
import UUID from "uuid/v4";

export interface ToDoItemInterface {
    content : string;
    completed : boolean;
    UUID : string;
}

class ToDoServiceClass {

    @observable public showCompleted : boolean = true;
    @observable public showPending : boolean = true;
    @observable public toDoItems : Array<ToDoItemInterface> = [];

    @action
    public addTODO(content : string) {
        this.toDoItems.push(
            {
                content,
                completed: false,
                UUID: UUID()
            }
        );
    }

}

const ToDoService = new ToDoServiceClass();

export {
    ToDoService
};
