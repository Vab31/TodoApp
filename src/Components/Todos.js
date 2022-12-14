import { TodoContext } from  "../Context/TodoContext";
import { REMOVE_TODO} from  "../Context/action.types";
import { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todos = () =>{
    const {todos, dispatch} =useContext(TodoContext);
    return(
     <ListGroup className=" mt-5 mb-2 items">
        {todos.map(todo=>(
            <ListGroupItem key={todo.id} style={{"background-color":"tomato",width:"70%"}} >
                {todo.todoString}
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                <span  onClick={()=>{
                    dispatch({
                        type:REMOVE_TODO,
                        payload:todo.id
                    })
                }} style={{"textAlign":"right"}}><FaCheckDouble/></span>
            </ListGroupItem>
        ))}
     </ListGroup>

    )
}

export default Todos