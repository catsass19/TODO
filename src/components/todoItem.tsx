import * as React from "react";
import {ToDoItemInterface} from "../service/toDoService";
import Checkbox from "material-ui/Checkbox";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/action/delete";

export interface TodoItemProps {
    item : ToDoItemInterface;
    onStatusChange? : (status : boolean) => void;
    onDelete? : () => void;
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
                    borderBottom: "1px solid #DDD",
                    justifyItems: "center",
                    alignItems: "center"
                }}
            >
                <div>
                    <Checkbox
                        checked={item.completed}
                        onCheck={this.toggleStatus.bind(this)}
                    />
                </div>
                <div
                    style={{
                        flex: 1,
                        textDecoration: item.completed? "line-through" : null,
                        color: item.completed? "#CCC" : null,
                        wordWrap: "break-word",
                        overflowX: "hidden"
                    }}
                >
                    {item.content}
                </div>
                <div>
                    <IconButton tooltip="Delete TODO" onClick={this.removeOnClick.bind(this)}>
                        <DeleteIcon color="#CCC" hoverColor="red"/>
                    </IconButton>
                </div>
            </div>
        );
    }
    public toggleStatus(e : Event, isChecked : boolean) {
        if (this.props.onStatusChange) {
            this.props.onStatusChange(isChecked);
        }
    }
    public removeOnClick(e : Event) {
        if (this.props.onDelete) {
            this.props.onDelete();
        }
    }
}
