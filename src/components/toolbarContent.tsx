import * as React from "react";
import {observer} from "mobx-react";
import Toggle from "material-ui/Toggle";
import {List, ListItem} from "material-ui/List";
import FilterIcon from "material-ui/svg-icons/content/filter-list";
import DeleteIcon from "material-ui/svg-icons/action/delete";

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
                    <ListItem
                        leftIcon={<FilterIcon/>}
                        primaryText={`Pending (${ToDoService.counts.pending})`}
                        rightToggle={
                            <Toggle
                                toggled={ToDoService.showPending}
                                onToggle={this.togglePending}
                            />
                        }
                    />
                    <ListItem
                        insetChildren={true}
                        primaryText={`Completed (${ToDoService.counts.completed})`}
                        rightToggle={
                            <Toggle
                                toggled={ToDoService.showCompleted}
                                onToggle={this.toggleCompleted}
                            />
                        }
                    />
                    <ListItem
                        hoverColor="#f9d1d1"
                        leftIcon={<DeleteIcon/>}
                        primaryText="Remove Completed"
                        onClick={this.removeCompleted}
                    />
                </List>
            </div>
        );
    }
    private togglePending(event : object, isInputChecked : boolean) : void {
        ToDoService.showPending = isInputChecked;
    }
    private toggleCompleted(event : object, isInputChecked : boolean) : void {
        ToDoService.showCompleted = isInputChecked;
    }
    private removeCompleted(e : object) {
        ToDoService.removeCompletedTODO();
    }
}
