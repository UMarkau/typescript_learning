import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes, FetchTodosAction, DeleteTodoAction, Todo } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Todo[]>(url);

  dispatch<FetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: response.data,
  });
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.deleteTodo,
  payload: id,
});
