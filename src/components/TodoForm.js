import React, {useState} from 'react';
import {Button, FormControl, Grid, Input, makeStyles, Paper} from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        width: '100%',
        flexDirection: 'row',
        color: 'white'
    },
    item: {
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
        background: '#333333',
        padding: '20px',
        color: 'white'
    }

})

const EMPTY_TODO = {
    title: "",
    completed: false
}
const TodoForm = ({onAddTodo}) => {
    const classes = useStyle()
    const [todo, setTodo] = useState(EMPTY_TODO);

    const handlerChange = (e) => {
        setTodo((todo) => ({...todo, title: e.target.value}))
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        onAddTodo(todo)
        setTodo(EMPTY_TODO)
    }
    return (
        <Paper className={classes.paper}>
            <FormControl className={classes.root}>
                <Grid container spacing={3} alignItems='center' justify='center'>
                    <Grid item xs={6} className={classes.item}>
                        <Input value={todo.title} onChange={handlerChange} id="my-input"
                               placeholder='Enter your task...'
                               className={classes.root}/>
                    </Grid>
                    <Grid item xs={6} className={classes.item}>
                        <Button onClick={handlerSubmit} variant='contained' color='secondary'>Add</Button>
                    </Grid>
                </Grid>
            </FormControl>

        </Paper>


    );
}

export default TodoForm;