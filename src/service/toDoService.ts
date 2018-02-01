import {observable, action, computed} from "mobx";
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

    @computed public get counts() : {completed : number, pending : number} {
        const completed = this.toDoItems.filter((item) => {
            return item.completed;
        }).length;
        const pending = this.toDoItems.length - completed;
        return {
            completed,
            pending
        };
    }

    @action public addTODO(content : string) {
        this.toDoItems.unshift({
            content,
            completed: false,
            UUID: UUID()
        });
    }
    @action public setTODOstatus(index : number, status : boolean) {
        if (this.toDoItems[index]) {
            this.toDoItems[index].completed = status;
        }
    }
    @action public removeTODO(index : number) {
        this.toDoItems.splice(index, 1);
    }
}

const ToDoService = new ToDoServiceClass();

export {
    ToDoService
};
