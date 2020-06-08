import React from "react";

export const AddToList = (props) => {
    return (
        <div><h3>Add Item</h3>
            <p>
                <input onKeyUp={(e)=>props.addItem(e)} placeholder="Please Add New Task" id="new-task" type="text" />
            </p>
        </div>
    )
}