import * as React from "react";
import {ToDoItemInterface} from "../service/toDoService";
import Checkbox from "material-ui/Checkbox";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import autobind from "autobind-decorator";
import TextField from "material-ui/TextField";

export interface TodoItemProps {
    item : ToDoItemInterface;
    onStatusChange? : (status : boolean) => void;
    onDelete? : () => void;
    onContentChange? : (content : string) => void;
}

export interface TodoItemState {
    edit? : boolean;
    text? : string;
}

export class TodoItem extends React.Component<TodoItemProps, TodoItemState> {

    private textFieldRef : TextField | null = null;

    constructor(props : TodoItemProps) {
        super(props);
        this.state = {
            edit: false
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
                    borderBottom: "1px solid #EEE",
                    justifyItems: "center",
                    alignItems: "center"
                }}
            >
                <div>
                    <Checkbox
                        checked={item.completed}
                        onCheck={this.toggleStatus}
                    />
                </div>
                <div
                    style={{
                        flex: 1,
                        textDecoration: item.completed? "line-through" : null,
                        color: item.completed? "#888" : null,
                        wordWrap: "break-word",
                        overflowX: "hidden"
                    }}
                >
                    {this.state.edit?
                        <TextField
                            ref={this.getRef}
                            autoFocus={true}
                            multiLine={true}
                            fullWidth={true}
                            value={this.state.text}
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.saveResult}
                        />
                        :
                        <span onClick={this.toggleEdit} style={{cursor: "pointer"}}>{item.content}</span>
                    }
                </div>
                <div>
                    <IconButton tooltip="Delete TODO" onClick={this.removeOnClick}>
                        <DeleteIcon color="#CCC" hoverColor="red"/>
                    </IconButton>
                </div>
            </div>
        );
    }
    @autobind
    private getRef(ref : TextField) {
        this.textFieldRef = ref;
    }
    @autobind
    private onFocus() {
        this.setState({
            text: this.props.item.content
        }, () => {
            document.addEventListener("keydown", this.kbHandler);
        });
    }
    @autobind
    private onChange(e : object, text : string) {
        this.setState({text});
    }
    @autobind
    private toggleStatus(e : object, isChecked : boolean) {
        if (this.props.onStatusChange) {
            this.props.onStatusChange(isChecked);
        }
    }
    @autobind
    private removeOnClick(e : object) {
        if (this.props.onDelete) {
            this.props.onDelete();
        }
    }
    @autobind
    private toggleEdit(e? : object) {
        if (this.state.edit) {
            this.textFieldRef = null;
        }
        this.setState({ edit: !this.state.edit });
    }
    @autobind
    private saveResult(e : any) {
        document.removeEventListener("keydown", this.kbHandler);
        if (this.props.onContentChange) {
            this.props.onContentChange(this.state.text);
        }
        this.toggleEdit();
    }
    @autobind
    private kbHandler(event : KeyboardEvent) {
        if (event.key === "Enter" && this.textFieldRef) {
            this.textFieldRef.blur();
        }
    }
}
