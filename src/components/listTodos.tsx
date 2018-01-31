import * as React from "react";
import {toJS} from "mobx";
import {observer} from "mobx-react";

import {ToDoService, ToDoItemInterface} from "../service/toDoService";
import {TodoItem} from "./todoItem";

export interface ListTodoProps {

}

export interface ListTodoState {

}

@observer
export class ListTodos extends React.Component<ListTodoProps, ListTodoState> {

    constructor(props : ListTodoProps) {
        super(props);
        this.state = {
        };
    }
    public render() {
        const items = toJS(ToDoService.toDoItems);
        return(
            <div style={{minWidth: "200px", display: "flex", flexDirection: "column"}}>
                {items.map((item : ToDoItemInterface) => <TodoItem key={item.UUID} item={item}/>)}
            </div>
        );
    }

}
