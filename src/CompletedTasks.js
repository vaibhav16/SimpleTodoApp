import React from "react";

export const CompletedTasks = (props) => {
    return (
        <div>
            <h3>Completed</h3>
            <ul id="completed-tasks">
                {TasksList(props)}
            </ul>
        </div>
    )
}

const TasksList = (props) =>{
    return props.completedTasks && props.completedTasks.map((item)=>{
        return <Task key={Math.random()} item={item} markPending={props.markPending} />
    })
}

const Task = (props) => {
    return (
        <li>
            <input onChange={(e)=>{props.markPending(e,props.item)}} type="checkbox" />
            <label>{props.item.name}</label>
            <input type="text" />
        </li>
    )
}