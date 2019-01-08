import { todosConstants } from './constants';

const todosReducerDefaultState = [];

export default (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    // Get Todos
    case todosConstants.GET_TODOS_IN_PROCESS:
      return [];
    case todosConstants.GET_TODOS_SUCCESS:
      return action.todos;
    case todosConstants.GET_TODOS_FAILURE:
      return [];
    // Create Todo
    case todosConstants.CREATE_TODO_IN_PROCESS:
      return state;
    case todosConstants.CREATE_TODO_SUCCESS:
      return [...state, action.todo];
    case todosConstants.CREATE_TODO_FAILURE:
      return state;
    // Edit Todo
    case todosConstants.EDIT_TODO_IN_PROCESS:
      return state;
    case todosConstants.EDIT_TODO_SUCCESS:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        }
        return todo;
      });
    case todosConstants.EDIT_TODO_FAILURE:
      return state;
    // Remove Todo
    case todosConstants.REMOVE_TODO_IN_PROCESS:
      return state;
    case todosConstants.REMOVE_TODO_SUCCESS:
      return state.filter(({ id }) => id !== action.id);
    case todosConstants.REMOVE_TODO_FAILURE:
      return state;
    // Switch Todo Status
    case todosConstants.SWITCH_TODO_STATUS_IN_PROCESS:
      return state;
    case todosConstants.SWITCH_TODO_STATUS_SUCCESS:
      return state.map(todo => {
        if (todo.id === action.todo.id) {
          return {
            ...todo,
            isDone: !todo.isDone
          };
        }
        return todo;
      });
    case todosConstants.SWITCH_TODO_STATUS_FAILURE:
      return state;
    // Default
    default:
      return state;
  }
};
