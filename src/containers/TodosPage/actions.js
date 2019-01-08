import axios from 'axios';
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux';
import { authHeader } from '../../helpers/auth-header';
import { userService } from '../../services/user';
import { todosConstants } from './constants';
import { baseUrl } from '../../helpers/baseUrl';

export function getTodos() {
  const getTodosInProcess = () => ({
    type: todosConstants.GET_TODOS_IN_PROCESS
  });

  const getTodosSuccess = (todos) => ({
    type: todosConstants.GET_TODOS_SUCCESS,
    todos
  });

  const getTodosFailure = (error) => ({
    type: todosConstants.GET_TODOS_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(getTodosInProcess());

    const options = {
      headers: authHeader()
    };
    return axios.get(`${baseUrl}/api/todos/`, options)
      .then((res) => {
        const todos = res.data;
        dispatch(getTodosSuccess(todos));
        dispatch(snackbar.show({
          message: 'You successfully fetched your Todos.'
        }));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(getTodosFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

export function createTodo(name) {
  const createTodoInProcess = () => ({
    type: todosConstants.CREATE_TODO_IN_PROCESS
  });

  const createTodoSuccess = (todo) => ({
    type: todosConstants.CREATE_TODO_SUCCESS,
    todo
  });

  const createTodoFailure = (error) => ({
    type: todosConstants.CREATE_TODO_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(createTodoInProcess());

    const data = JSON.stringify({
      name
    });

    const options = {
      headers: authHeader(),
      body: {
        name
      }
    };

    return axios.post(`${baseUrl}/api/todos/`, data, options)
      .then((res) => {
        const todo = res.data;
        dispatch(createTodoSuccess(todo));
        dispatch(snackbar.show({
          message: 'You successfully added your Todo.'
        }));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(createTodoFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

export function removeTodo(id) {
  const removeTodoInProcess = () => ({
    type: todosConstants.REMOVE_TODO_IN_PROCESS
  });

  const removeTodoSuccess = (todo) => ({
    type: todosConstants.REMOVE_TODO_SUCCESS,
    id: todo.id
  });

  const removeTodoFailure = (error) => ({
    type: todosConstants.REMOVE_TODO_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(removeTodoInProcess());

    const options = {
      headers: authHeader()
    };

    return axios.delete(`${baseUrl}/api/todos/${id}`, options)
      .then((res) => {
        const todo = res.data;
        dispatch(removeTodoSuccess(todo));
        dispatch(snackbar.show({
          message: 'You successfully removed your Todo.'
        }));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(removeTodoFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

export function switchTodoStatus(id) {
  const switchTodoStatusInProcess = () => ({
    type: todosConstants.SWITCH_TODO_STATUS_IN_PROCESS
  });

  const switchTodoStatusSuccess = (todo) => ({
    type: todosConstants.SWITCH_TODO_STATUS_SUCCESS,
    todo
  });

  const switchTodoStatusFailure = (error) => ({
    type: todosConstants.SWITCH_TODO_STATUS_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(switchTodoStatusInProcess());

    const options = {
      headers: authHeader()
    };

    return axios.put(`${baseUrl}/api/todos/${id}/status`, {}, options)
      .then((res) => {
        const todo = res.data;
        dispatch(switchTodoStatusSuccess(todo));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(switchTodoStatusFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

export function editTodo(id, updates) {
  const editTodoInProcess = () => ({
    type: todosConstants.EDIT_TODO_IN_PROCESS
  });

  const editTodoSuccess = (todoId, todoUpdates) => ({
    type: todosConstants.EDIT_TODO_SUCCESS,
    id: todoId,
    updates: todoUpdates
  });

  const editTodoFailure = (error) => ({
    type: todosConstants.EDIT_TODO_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(editTodoInProcess());

    const options = {
      headers: authHeader()
    };

    return axios.put(`${baseUrl}/api/todos/${id}`, { ...updates }, options)
      .then(() => {
        dispatch(editTodoSuccess(id, updates));
        dispatch(snackbar.show({
          message: 'You successfully updated your Todo.'
        }));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(editTodoFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}
