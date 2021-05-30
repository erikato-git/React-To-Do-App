import Task from './Task';


const Tasks = (props) => {

    // Then we can also use 'tasks'-array to change states
        return (
        <>
            {props.tasks.map((task) => (
                // <h3 key={task.id}>{task.text}</h3>
                <Task key={task.id} task={task} onDelete={props.onDelete}/>
            ))}
        </>
    )
}

export default Tasks
