export const ADD_TODO='ADD_TODO';
export const DELETE_TODO='DELETE_TODO';
export const CHANGE_STATUS_TODO='CHANGE_STATUS_TODO';


export const addTodo=(todo)=>({type:ADD_TODO,payload:todo});
export const deleteToto=(todo)=>({type:DELETE_TODO,payload:todo});
export const changeStatusTodo= (todo) =>({type: CHANGE_STATUS_TODO,payload:todo});