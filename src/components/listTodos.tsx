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
                {items.map((item : ToDoItemInterface, index : number) => {
                    const {completed} = item;
                    let show = false;
                    if ((ToDoService.showPending && !completed) ||
                        (ToDoService.showCompleted && completed)
                    ) {
                        show = true;
                    }
                    return show? (
                        <TodoItem
                            key={item.UUID}
                            item={item}
                            onStatusChange={this.changeItemStatus.bind(this, index)}
                            onDelete={this.removeItem.bind(this, index)}
                            onContentChange={this.changeContent.bind(this, index)}
                        />
                    ) : null;
                })}
            </div>
        );
    }
    private changeItemStatus(index : number, status : boolean) {
        ToDoService.setTODOstatus(index, status);
    }
    private removeItem(index : number) {
        ToDoService.removeTODO(index);
    }
    private changeContent(index : number, content : string) {
        ToDoService.setTODOcontent(index, content);
    }
}
