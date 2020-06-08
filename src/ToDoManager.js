import React from "react";
import { AddToList } from './AddToList';
import { PendingTasks } from './PendingTasks';
import { CompletedTasks } from './CompletedTasks';
import tasksCompletedJson from './tasksCompleted.json';
import tasksPendingJson from './tasksPending.json';

class TodoManager extends React.Component{
    constructor(){
        super();
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
        this.markPending = this.markPending.bind(this);
        this.state = {
            pendingTasks:tasksPendingJson,
            completedTasks:tasksCompletedJson
        }
    }

    addItem(e){
        if(e && e.target.value && e.keyCode===13){
            const filteredList = this.state.pendingTasks;
            let newItem = {id:Math.random(), name: e.target.value};
            filteredList.push(newItem);
            this.setState({pendingTasks:filteredList});
            e.target.value="";
        }
    }

    deleteItem(id){
        const filteredList = this.state.pendingTasks.filter((item)=>item.id!==id);
        this.setState({pendingTasks:filteredList});
    }

    editItem(e,id){
        if(e && e.target.value && e.keyCode===13){
            const filteredList = this.state.pendingTasks;
            filteredList.map(item=>item.id===id?item.name=e.target.value:'')
            this.setState({pendingTasks:filteredList});
        }
    }

    markCompleted(e,item){
        if(e && e.target.checked){
            const newPendingTasksList = this.state.pendingTasks.filter((todo)=>todo.id!==item.id);
            this.setState({pendingTasks:newPendingTasksList});
            const newCompletedTasksList = this.state.completedTasks;
            newCompletedTasksList.push(item);
            this.setState({completedTasks:newCompletedTasksList});
        }
    }

    markPending(e,item){
        if(e && e.target.checked){
            const newCompletedTasksList = this.state.completedTasks.filter((todo)=>todo.id!==item.id);
            this.setState({completedTasks:newCompletedTasksList});
            const newPendingTasksList = this.state.pendingTasks;
            newPendingTasksList.push(item);
            this.setState({pendingTasks:newPendingTasksList});
        }
    }

    render(){
        return(
            <div className="container">
                <h2>TO DO LIST</h2>
                <AddToList addItem={this.addItem}/>
                <PendingTasks pendingTasks={this.state.pendingTasks}  deleteItem={this.deleteItem} editItem={this.editItem} markCompleted={this.markCompleted} />
                <CompletedTasks completedTasks={this.state.completedTasks} markPending={this.markPending} />
            </div>
        )
    }
}

export default TodoManager;