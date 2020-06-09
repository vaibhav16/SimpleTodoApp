export const reducer = function (state, action) {
    switch (action.type) {
        case "UPDATE_PENDING":
            return {...state,
                ...{pendingTasks:[...action.list]}
            }
        case "UPDATE_COMPLETED":
            return {...state,
                ...{completedTasks:[...action.list]}
            }
        default:
            return state;
    }
};
