import * as React from "react";
import {observer} from "mobx-react";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import Drawer from "material-ui/Drawer";
import autobind from "autobind-decorator";

import {ToolbarContent} from "./toolbarContent";
import ViewportService from "../service/viewportService";

export interface ToolbarProps {

}

export interface ToolbarState {
    openToolbar : boolean;
}

@observer
export class Toolbar extends React.Component<ToolbarProps, ToolbarState> {

    private toolbarWidth : number = 300;

    constructor(props : ToolbarProps) {
        super(props);
        this.state = {
            openToolbar: false
        };
    }
    public render() {
        if (ViewportService.isMobile) {
            return (
                <div>
                    <div
                        style={{
                            position: "fixed",
                            left: 0,
                            top : 0
                        }}
                    >
                        <MenuIcon
                            style={{
                                margin: "10px"
                            }}
                            onClick={this.toggleToolbar}
                        />
                    </div>
                    <Drawer
                        open={this.state.openToolbar}
                        docked={false}
                        width={this.toolbarWidth}
                        onRequestChange={this.toggleToolbar}
                    >
                        <ToolbarContent />
                    </Drawer>
                </div>
            );
        } else {
            return (
                <div style={{width: `${this.toolbarWidth}px`}}>
                    <ToolbarContent />
                </div>
            );
        }
    }

    @autobind
    public toggleToolbar() {
        this.setState({openToolbar: !this.state.openToolbar});
    }
}
