import { useRef } from "react";
import { useDispatch } from "react-redux";
// import {addTodo} from './actions/addTodo';
import { addTodo } from "./Reducers/reducers";
const Task = () =>{ 
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const addNewTask = ()=>{
        const task = inputRef.current.value.trim();
        if(task !== ""){
            dispatch(addTodo(task));
            inputRef.current.value = "";
        }
    }     
    return(
        <div className="task-component">
            <div className="add-task">
                <input 
                className="taskInput"
                type="text"
                ref={inputRef}
                placeholder="add task here...."/>
                <button onClick={addNewTask}>
                    Add Task
                </button>

            </div>
        </div>
    )


};


export default Task;