import React from 'react';
import Header from "./Header";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addTodo, changeStatusTodo, deleteToto} from "../store/actions/actions";

const useStyle = makeStyles({
    root: {
        paddingTop: '50px',
    },
    height: {
        height: '50px'
    },
    paper: {
        background: '#212121'
    }
})

const TodoPage = ({todos, dispatch}) => {
    const classes = useStyle()

    function handlerAddTodo(todo) {
        dispatch(addTodo(todo))
    }

    function handlerDeleteTodo(todo) {
        dispatch(deleteToto(todo))
    }

    function handlerChangeStatus(todo) {
        dispatch(changeStatusTodo(todo))
    }

    return (
        <>
            <Header/>
            <Grid container className={classes.root} justify='center'>
                <Grid item md={6}>
                    <Paper className={classes.paper}>
                        <TodoForm onAddTodo={handlerAddTodo}/>
                        <TodoList todos={todos} onDeleteTodo={handlerDeleteTodo} onChangeStatus={handlerChangeStatus}/>
                    </Paper>

                </Grid>

            </Grid>
        </>
    );
}

function mapStateToProps(state) {
    return {todos: state.todos}
}

export default connect(mapStateToProps)(TodoPage);