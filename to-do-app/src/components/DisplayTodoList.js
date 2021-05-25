import react from 'react';
import AddTodoItem from './AddTodoItem';

export default class DisplayTodoList extends react.Component{
   
    fetchTasks = () => {
        console.log(AddTodoItem.state.tasks)
    }


    render() {
        return(
            <div>
                {/* {this.fetchTasks} */}


                {/* {AddTodoItem.state.tasks.map(task => (
                    <div key={task}></div>
                ))} */}
            </div>
        );
    }
}