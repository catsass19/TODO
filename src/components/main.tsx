import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import {Toolbar} from "./toolbar";
import {ToDoArea} from "./todoArea";

const Main = (
    <MuiThemeProvider>
        <div
            style={{
                height: "100vh",
                display: "flex"
            }}
        >
            <Toolbar />
            <ToDoArea />
        </div>
    </MuiThemeProvider>
);

export default Main;
