import * as React from "react";
import {toJS} from "mobx";
import {observer} from "mobx-react";

import {ToDoService, ToDoItemInterface} from "../service/toDoService";

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
            <div style={{flex: 1}}>
                {
                    items.map((item : ToDoItemInterface) => {
                        const {UUID, content} = item;
                        return (
                            <div key={UUID}>
                                {content}
                            </div>
                        );
                    })
                }
            </div>
        );
    }

}
