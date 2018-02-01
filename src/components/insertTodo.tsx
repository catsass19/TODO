import * as React from "react";
import TextField from "material-ui/TextField";
import autobind from "autobind-decorator";
import {ToDoService} from "../service/toDoService";

export interface InsertTodoProps {

}

export interface InsertTodoState {
    todoValue : string;
}

export class InsertTodo extends React.Component<InsertTodoProps, InsertTodoState> {

    constructor(props : InsertTodoProps) {
        super(props);
        this.state = {
            todoValue: ""
        };
    }
    public render() {
        return(
            <TextField
                fullWidth={true}
                floatingLabelText="Insert New TODO Item"
                value={this.state.todoValue}
                onChange={this.updateText}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
            />
        );
    }
    @autobind
    private updateText(event : object, todoValue : string) {
        this.setState({todoValue});
    }
    @autobind
    private onFocus(e : object) {
        document.addEventListener("keydown", this.kbHandler);
    }
    @autobind
    private onBlur(e : object) {
        document.removeEventListener("keydown", this.kbHandler);
    }
    @autobind
    private kbHandler(event : KeyboardEvent) {
        if (event.key === "Enter") {
            if (this.state.todoValue.length) {
                ToDoService.addTODO(this.state.todoValue);
                this.setState({todoValue: ""});
            }
        }
    }
}
