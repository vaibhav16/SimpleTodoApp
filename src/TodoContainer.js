
import { connect } from 'react-redux';
import ToDoManager  from './ToDoManager';


const mapStateToProps = state => {
  return {
    pendingTasks:state.pendingTasks,
    completedTasks:state.completedTasks
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePendingTasks: (list) => dispatch({ type: 'UPDATE_PENDING', list }),
    updateCompletedTasks: (list) => dispatch({ type: 'UPDATE_COMPLETED', list }),

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoManager);
