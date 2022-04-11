import React from 'react';
import {FaTrashAlt} from 'react-icons/fa'
import './TaskItem.css'

const TaskItem = ()=>{
    return (
        <li className="TaskItem">
        <input type="checkbox" />
        <h2>Build This App</h2>
        <button>
          <FaTrashAlt />
        </button>
      </li>
    )
}

export default TaskItem