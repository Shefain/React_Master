const TodoReducer = (state, action) => {
  switch (action.type) {
    case "added": {
      const maxId = state.reduce((acc, cur) =>
        acc.id > cur.id ? acc : cur.id
      );
      return [
        ...state,
        {
          id: maxId + 1,
          task: action.text,
          done: false,
        },
      ];
    }
    case "deleted": {
      return state.filter((t) => t.id !== action.id);
    }
    case "changed": {
      const nextTask = state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
      return nextTask;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default TodoReducer;
