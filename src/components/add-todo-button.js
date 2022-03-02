import React from "react";
import { useDispatch } from "react-redux";

// actions
import { setOpenFormDialog } from "../store/action/todo";

const AddTodoButton = () => {
  const dispatch = useDispatch();

  return (
    <h6
      className="text-dark"
      style={{ cursor: "pointer" }}
      onClick={() => dispatch(setOpenFormDialog(true))}
    >
      Add Todo
      <i className="bi bi-plus-lg"></i>
    </h6>
  );
};

export default AddTodoButton;
