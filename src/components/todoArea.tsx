import * as React from "react";

import {InsertTodo} from "./insertTodo";
import {ListTodos} from "./listTodos";

const ToDoArea = () => {
    return (
        <div
            style={{
                flex: 1,
                alignItems: "center",
                justifyItems: "center",
                overflowY: "auto",
                padding: "20px 10% 0"
            }}
        >
            <InsertTodo />
            <div style={{marginTop: "20px"}}>
                <ListTodos />
            </div>
        </div>
    );
};

export {
    ToDoArea
};
