import * as React from "react";
import Toggle from "material-ui/Toggle";

export interface ToolbarContentProps {

}

export interface ToolbarContentState {

}

export class ToolbarContent extends React.Component<ToolbarContentProps, ToolbarContentState> {
    constructor(props : ToolbarContentProps) {
        super(props);
    }
    public render() {
        return (
            <div>
                <Toggle
                    label="Unfinished"
                    labelPosition="right"
                />
                <Toggle
                    label="Completed"
                    labelPosition="right"
                />
            </div>
        );
    }
}
