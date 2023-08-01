import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo } from "./actions/addTodo";
import { deleteTodo } from "./Reducers/reducers";

const TaskList = () =>{
    const task = useSelector((state) => state.todo.tasks);
    const dispatch = useDispatch();
    console.log(task, "state");

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return(
       <div className="tasklist">
        <div className="display-tasks">
            <h3>
                Yours Tasks :
            </h3>
            <ul className="tasks">
                { task.map((task)=> (
                    <li className="task" key={task.id}>
                        {task.text}
                        <button
                        className="delete-btn"
                        onClick={()=> handleDelete(task.id)}>
                            delete</button> 

                        <button className="delete-btn">Edit</button>

                    </li>
                ))

                }
            </ul>

        </div>
       </div>
    )
}

export default TaskList;