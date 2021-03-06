import React from 'react';
import {FaTimes} from 'react-icons/fa';


const Task = (props) => {
    return (
        <div className='task'>
            <h3>{props.task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => props.onDelete(props.task.id)}/
            // OBS: Hvordan jeg laver onClick-metoden
            ></h3>
            <p>{props.task.day}</p>
        </div>
    )
}

export default Task
