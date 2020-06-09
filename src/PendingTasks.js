import React from "react";

export const PendingTasks = (props) => {
    return (
        <div>
            <h3>Todo</h3>
            <ul id="incomplete-tasks">
                {TasksList(props)}
            </ul>
        </div>
    )
}

const TasksList = (props) =>{
    if(props.pendingTasks){
        return props.pendingTasks && props.pendingTasks.map((item) => {
            return <Task key={Math.random()} item={item} editItem={props.editItem} deleteItem={props.deleteItem} markCompleted = {props.markCompleted}/>
        })
    }
}

const Task = (props) => {
    return (
        <li>
            <input onChange={(e)=>props.markCompleted(e,props.item)} type="checkbox" />
            <label>{props.item.name}</label>
            <input type="text" onKeyUp={(e)=>props.editItem(e,props.item.id)} />
            <button className="edit" onClick={(e)=>enableEdit(e)} >Edit</button>
            <button className="delete" onClick={(e)=>props.deleteItem(props.item.id)} >Delete</button>
        </li>
    )
}

const enableEdit = (e) =>{
    //Enabling Renaming
    let listItem = e.target.parentNode;

	let editInput = listItem.querySelector("input[type=text");
	let label = listItem.querySelector("label");

	let containsClass = listItem.classList.contains("editMode");

	if (containsClass) {
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}
	listItem.classList.toggle("editMode");
}