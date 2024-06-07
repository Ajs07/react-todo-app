import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({todos}) => {
    return(
        <div>
            {todos.map((todo) => {
                // key={todo.id} seharusnya ditambahkan pada masing-masing elemen dalam sebuah array untuk memberikan identitas yang unik dan membantu React mendeteksi element mana yang telah di-render.
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default Todos