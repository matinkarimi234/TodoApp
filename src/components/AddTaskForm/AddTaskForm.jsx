import React,{useState} from 'react';
import './AddTaskForm.css'
const AddTaskForm = ({addTask})=>{

    const [value,setvalue] = useState('')

    const handleChange = (event)=>{
      if (event) event.preventDefault();
      setvalue(event.target.value)
    }

    const handleSubmit = (event)=>{
      if (event) event.preventDefault();
      if(!value || value === "")
      {
        return
      }
      addTask(value)
    }

    return (
        <div className="AddTaskForm">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" placeholder="What needs to be done?">

          </input>
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    )
}

export default AddTaskForm