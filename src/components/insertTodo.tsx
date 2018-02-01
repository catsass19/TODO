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

    private isCompositioning : boolean = false;

    constructor(props : InsertTodoProps) {
        super(props);
        this.state = {
            todoValue: ""
        };
    }
    public render() {
        /*
            TypeScript pitfall.
            Seems like composition events are not defined correctly in TextField
            Even though props will be passed down to actual input element but TS compilation will still fail
            In this case we wrap an input element inside of TextField
         */
        return(
            <TextField
                fullWidth={true}
                floatingLabelText="Insert New TODO Item"
                onChange={this.updateText}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
            >
                <input
                    value={this.state.todoValue}
                    onCompositionStart={this.onComposition}
                    onCompositionUpdate={this.onComposition}
                    onCompositionEnd={this.endComposition}
                />
            </TextField>
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
            if (!this.isCompositioning && this.state.todoValue.length) {
                ToDoService.addTODO(this.state.todoValue);
                this.setState({todoValue: ""});
            }
        }
    }
    @autobind
    private onComposition() {
        this.isCompositioning = true;
    }
    @autobind
    private endComposition() {
        this.isCompositioning = false;
    }
}
