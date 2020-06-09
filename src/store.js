import { createStore } from 'redux';
import { reducer } from './reducer';
import tasksCompletedJson from './tasksCompleted.json';
import tasksPendingJson from './tasksPending.json';

let initialState = {
    pendingTasks:tasksPendingJson,
    completedTasks:tasksCompletedJson
}

export const store = createStore(reducer,initialState);