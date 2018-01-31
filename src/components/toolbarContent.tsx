import * as React from "react";
import {observer} from "mobx-react";
import Toggle from "material-ui/Toggle";
import Subheader from "material-ui/Subheader";
import {List, ListItem} from "material-ui/List";

import {ToDoService} from "../service/toDoService";

export interface ToolbarContentProps {

}

export interface ToolbarContentState {

}

@observer
export class ToolbarContent extends React.Component<ToolbarContentProps, ToolbarContentState> {
    constructor(props : ToolbarContentProps) {
        super(props);
    }
    public render() {
        return (
            <div>
                <List>
                    <Subheader>Show TODOs</Subheader>
                    <ListItem
                        primaryText="Pending"
                        rightToggle={
                            <Toggle
                                toggled={ToDoService.showPending}
                                onToggle={this.togglePending.bind(this)}
                            />
                        }
                    />
                    <ListItem
                        primaryText="Completed"
                        rightToggle={
                            <Toggle
                                toggled={ToDoService.showCompleted}
                                onToggle={this.toggleCompleted.bind(this)}
                            />
                        }
                    />
                </List>
            </div>
        );
    }
    public togglePending(event : Event, isInputChecked : boolean) : void {
        ToDoService.showPending = isInputChecked;
    }
    public toggleCompleted(event : Event, isInputChecked : boolean) : void {
        ToDoService.showCompleted = isInputChecked;
    }
}
