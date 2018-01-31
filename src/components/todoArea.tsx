import * as React from "react";

import {InsertTodo} from "./insertTodo";
import {ListTodos} from "./listTodos";

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
            <InsertTodo />
            <ListTodos />
        </div>
    );
};

export {
    ToDoArea
};
