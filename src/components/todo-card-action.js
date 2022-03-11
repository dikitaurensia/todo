import React from "react";
import { useDispatch } from "react-redux";
import {
  updateTodoDocStatus,
  removeTodoDoc,
  setTodoDoc,
  setOpenFormDialog,
} from "../store/action/todo";

const TodoCardAction = ({ data }) => {
  const { id, status } = data;
  const dispatch = useDispatch();

  const handleUpdateStatusButton = (updateStatus) => {
    dispatch(updateTodoDocStatus(id, updateStatus));
  };

  const handleRemoveButton = () => {
    dispatch(removeTodoDoc(id));
  };

  return (
    <div className="d-flex">
      {status === 0 ? (
        <i className="bi bi-check-lg text-success"
          style={{ fontSize: 14, cursor: "pointer" }}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="is done?"
          onClick={() => handleUpdateStatusButton(status + 1)} />
      ) : (
        <i className="bi bi-x-lg text-danger"
          style={{ fontSize: 14, cursor: "pointer" }}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="is not done?"
          onClick={() => handleUpdateStatusButton(status - 1)} />
      )}
      <i className="bi bi-pencil-fill text-primary"
        style={{ fontSize: 14, marginLeft: 15, cursor: "pointer" }}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="edit"
        onClick={() => {
          dispatch(setTodoDoc(data));
          dispatch(setOpenFormDialog(true));
        }} />
      {status === 0 && (
        <i className="bi bi-trash3 text-danger"
          style={{ fontSize: 14, marginLeft: 15, cursor: "pointer" }}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="remove"
          onClick={handleRemoveButton} />
      )}
    </div>
  );
};

export default TodoCardAction;
