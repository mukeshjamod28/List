// const initialState = {
//     tasks : []
// };

// const taskReducer = (state= initialState,action)=>{
//     switch(action.type){
//         case 'ADD_TASK':
//             return{
//                 ...state,
//                 tasks: [...state.tasks,action.payload]
//             };
//         case 'DELETE_TASK':
//             return{
//                 ...state,
//                 tasks: state.tasks.filter(task => task.id !== action.payload)
//             };
//             default: 
//             return state;    
//     }

// };

// export default taskReducer;

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks : []
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) =>{
            state.tasks.push({id: Date.now() , text: action.payload})
        },
        deleteTodo: (state,action)=>{
            state.tasks = state.tasks.filter((task)=> task.id !== action.payload);
        }
    }
});


export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;