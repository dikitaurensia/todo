const updateTodoLists = (isDone, docs) =>
  isDone
    ? docs
        .filter(({ status }) => status === 1)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : docs
        .filter(({ status }) => status === 0)
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

export default updateTodoLists;
