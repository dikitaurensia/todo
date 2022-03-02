import React from "react";

// components
import TodoColumn from "../components/todo-column";

const Body = () => {
  return (
    <div className="container mt-3">
      <TodoColumn title="Not Done" />

      <TodoColumn title="Done" />
    </div>
  );
};

export default Body;
