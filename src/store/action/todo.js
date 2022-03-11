import axios from "axios";

import {
  SET_TODO_DOCS,
  ADD_TODO_DOC,
  UPDATE_TODO_DOC,
  UPDATE_TODO_DOC_STATUS,
  REMOVE_TODO_DOC,
  SET_TODO_DOC,
  SET_OPEN_FORM_DIALOG,
} from "../../constants/action-types";

const setTodoDocs = (todoDocs) => ({
  type: SET_TODO_DOCS,
  todoDocs,
});

export const addTodoDoc = (todoDoc) => ({
  type: ADD_TODO_DOC,
  todoDoc,
});

export const updateTodoDoc = (todoDoc) => ({
  type: UPDATE_TODO_DOC,
  todoDoc,
});

export const updateTodoDocStatus = (id, status) => ({
  type: UPDATE_TODO_DOC_STATUS,
  id,
  status,
});

export const removeTodoDoc = (id) => ({
  type: REMOVE_TODO_DOC,
  id,
});

export const setTodoDoc = (todoDoc) => ({
  type: SET_TODO_DOC,
  todoDoc,
});

export const setOpenFormDialog = (openFormDialog) => ({
  type: SET_OPEN_FORM_DIALOG,
  openFormDialog,
});

export const loadTodoDocs = () => async (dispatch) => {
  const config = {
    method: "get",
    url: "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(config);
    const todoDocs = response.data;

    dispatch(setTodoDocs(todoDocs));
  } catch (err) {
    console.log(err);
  }
};
