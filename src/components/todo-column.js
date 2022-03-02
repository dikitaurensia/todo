import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// componets
import TodoCard from "./todo-card";
import AddTodoButton from "./add-todo-button";

// helpers
import updateTodoLists from "../helpers/update-todo-lists";
import FormDialog from "./form-dialog";

const TitleIcon = ({ isDone }) =>
  isDone ? (
    <i className="bi bi-check-circle-fill text-success"></i>
  ) : (
    <i className="bi bi-x-circle-fill text-danger"></i>
  );

const TodoColumn = ({ title }) => {
  const { docs } = useSelector(({ todo }) => todo);
  const isDone = title.toLowerCase() === "done";

  const todoLists = updateTodoLists(isDone, docs);

  const { openFormDialog, doc: todoDoc } = useSelector(({ todo }) => todo);

  return (
    <Fragment>
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-md-start">
            {title} <TitleIcon isDone={isDone} />
          </h4>

          {!isDone && <AddTodoButton />}
        </div>

        {todoLists.map((todoList, index) => (
          <TodoCard data={todoList} key={index} />
        ))}
      </div>

      <FormDialog
        title={Boolean(todoDoc) ? "Update Todo" : "Add Todo"}
        open={openFormDialog}
      />
    </Fragment>
  );
};

export default TodoColumn;
