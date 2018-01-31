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
                floatingLabelText="Insert New TODO Item"
                value={this.state.todoValue}
                onChange={this.updateText.bind(this)}
                onFocus={this.onFocus.bind(this)}
                onBlur={this.onBlur.bind(this)}
            />
        );
    }
    public updateText(event : Event, todoValue : string) {
        this.setState({todoValue});
    }
    public onFocus() {
        document.addEventListener("keydown", this.kbHandler);
    }
    public onBlur() {
        document.removeEventListener("keydown", this.kbHandler);
    }
    @autobind
    public kbHandler(event : KeyboardEvent) {
        if (event.key === "Enter") {
            ToDoService.addTODO(this.state.todoValue);
            this.setState({todoValue: ""});
        }
    }
}
