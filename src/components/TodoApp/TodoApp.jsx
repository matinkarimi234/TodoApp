import React,{useEffect, useState} from 'react';
import './TodoApp.css'
import {
    AddTaskForm,
    TaskList,
    FilterFooter,
} from '../'
import {v4 as uuidv4} from 'uuid';
const TodoApp = ()=>{
    const [tasks,setTasks] = useState([])

    useEffect(()=>{
        setTasks([
            {
                id: uuidv4(),
                title: "Default Task",
                status: true, //boolean
            },
            {
                id: uuidv4(),
                title: "Default Task Number 2",
                status: false, //boolean
            }
        ])
    },[])

    const addTask = (taskTitle)=>{
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                status: false,
            }
        ])
    }
    const deleteTask = (taskId)=>{
        let newTasksList = tasks
        delete newTasksList(tasks.findIndex(task=> task.id === taskId))
        newTasksList.filter(item=>item)
        setTasks(newTasksList)
    }

    return (
        <div className="TodoApp">
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
            <FilterFooter tasks={tasks} />

        </div>
    )
}

export default TodoApp