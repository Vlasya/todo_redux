import React from 'react';
import {makeStyles, Paper} from "@material-ui/core";
import TodoItem from "./TodoItem";

const useStyle = makeStyles({
    paper: {
        border: '2px solid #333333',
        background: '#212121',
        color: 'white',
        marginTop: '20px',
        minHeight: '700px',
        padding: '20px',
    }
})


const TodoList = ({todos, onDeleteTodo, onChangeStatus}) => {
    const classes = useStyle()
    return (
        <Paper className={classes.paper}>
            {todos.map((todo) => (<TodoItem key={todo.title}
                                            todo={todo}
                                            onDeleteTodo={onDeleteTodo}
                                            onChangeStatus={onChangeStatus}/>))}
        </Paper>
    );
}

export default TodoList;