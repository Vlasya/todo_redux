import React from 'react';
import {Checkbox, IconButton, makeStyles, Paper, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle=makeStyles({
    root:{
        background:'#333333',
        color:'white',
        marginTop:'20px',
        minHeight:'30px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },

})

const TodoItem=({todo,onDeleteTodo,onChangeStatus})=> {
    const classes=useStyle()

    function handlerDelete(){
        onDeleteTodo(todo)
    }
    function handlerChange(){
        onChangeStatus(todo)
    }
    return (
        <Paper className={classes.root}>
            <Checkbox checked={todo.completed} onClick={handlerChange}/>
            <Typography align='left'>{todo.title}</Typography>
            <IconButton aria-label="delete" className={classes.margin} onClick={handlerDelete}>
                <DeleteIcon fontSize="small" />
            </IconButton>

        </Paper>
    );
}

export default TodoItem;