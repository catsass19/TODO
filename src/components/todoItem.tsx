import * as React from "react";
import {ToDoItemInterface} from "../service/toDoService";
import Checkbox from "material-ui/Checkbox";

export interface TodoItemProps {
    item : ToDoItemInterface;
}

export interface TodoItemState {

}

export class TodoItem extends React.Component<TodoItemProps, TodoItemState> {

    constructor(props : TodoItemProps) {
        super(props);
        this.state = {
        };
    }
    public render() {
        const {item} = this.props;
        return(
            <div
                style={{
                    flex: 1,
                    padding: "10px 20px",
                    display: "flex",
                    borderBottom: "1px solid #DDD"
                }}
            >
                <div>
                    <Checkbox />
                </div>
                <div style={{flex: 1}}>
                    {item.content}
                </div>
            </div>
        );
    }

}
