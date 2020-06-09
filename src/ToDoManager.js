import React from "react";
import { AddToList } from './AddToList';
import { PendingTasks } from './PendingTasks';
import { CompletedTasks } from './CompletedTasks';

class TodoManager extends React.Component{
    constructor(){
        super();
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
        this.markPending = this.markPending.bind(this);
    }

    addItem(e){
        if(e && e.target.value && e.keyCode===13){
            const filteredList = this.props.pendingTasks;
            let newItem = {id:Math.random(), name: e.target.value};
            filteredList.push(newItem);
            this.props.updatePendingTasks(filteredList)
            e.target.value="";
        }
    }

    deleteItem(id){
        const filteredList = this.props.pendingTasks.filter((item)=>item.id!==id);
        this.props.updatePendingTasks(filteredList)
    }

    editItem(e,id){
        if(e && e.target.value && e.keyCode===13){
            const filteredList = this.props.pendingTasks;
            filteredList.map(item=>item.id===id?item.name=e.target.value:'')
            this.props.updatePendingTasks(filteredList)
        }
    }

    markCompleted(e,item){
        if(e && e.target.checked){
            const newPendingTasksList = this.props.pendingTasks.filter((todo)=>todo.id!==item.id);
            this.props.updatePendingTasks(newPendingTasksList)
            const newCompletedTasksList = this.props.completedTasks;
            newCompletedTasksList.push(item);
            this.props.updateCompletedTasks(newCompletedTasksList)
        }
    }

    markPending(e,item){
        if(e && e.target.checked){
            const newCompletedTasksList = this.props.completedTasks.filter((todo)=>todo.id!==item.id);
            this.props.updateCompletedTasks(newCompletedTasksList)
            const newPendingTasksList = this.props.pendingTasks;
            newPendingTasksList.push(item);
            this.props.updatePendingTasks(newPendingTasksList)
        }
    }

    render(){
        return(
            <div className="container">
                <h2>TO DO LIST</h2>
                <AddToList key={Math.random()} addItem={this.addItem}/>
                <PendingTasks key={Math.random()} pendingTasks={this.props.pendingTasks}  deleteItem={this.deleteItem} editItem={this.editItem} markCompleted={this.markCompleted} />
                <CompletedTasks key={Math.random()} completedTasks={this.props.completedTasks} markPending={this.markPending} />
            </div>
        )
    }
}

export default TodoManager;