import React from "react";
import TodoCardAction from "./todo-card-action";

const TodoCard = ({ data }) => {
  const { title, description, status, createdAt } = data;

  return (
    <div className="card my-2">
      <div className="card-body text-start d-flex justify-content-between align-items-center">
        <div>
          <p
            className={
              status === 1
                ? "fw-bolder m-0 text-decoration-line-through"
                : "fw-bolder m-0"
            }
          >
            {title}
          </p>
          <p className="fw-light m-0">{description}</p>
          <div className="mt-2">
            <small className="text-black-50">
              <strong>createdAt:</strong> {createdAt}
            </small>
          </div>
        </div>

        <TodoCardAction data={data} />
      </div>
    </div>
  );
};

export default TodoCard;
