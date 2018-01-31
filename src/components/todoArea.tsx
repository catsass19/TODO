import * as React from "react";

import {InsertTodo} from "./insertTodo";

const ToDoArea = () => {
    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
            }}
        >
            <div
                style={{
                    padding: "10px"
                }}
            >
                <InsertTodo />
            </div>
            <div style={{flex: 1}}>
                asdas
            </div>
        </div>
    );
};

export {
    ToDoArea
};
