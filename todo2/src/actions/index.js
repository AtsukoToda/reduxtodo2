export const ADDTODO = "addTodo";
export const REMOVETODO = "removeTodo";
export const DONETODO = "doneTodo";

export const addTodo = (task) => {
  return {
    type: ADDTODO,
    todo: {
      title: task,
      flg: false,
    },
  };
};

export const removeTodo = (index) => {
  return {
    type: REMOVETODO,
    index, //index:index
  };
};

export const doneTodo = (index) => {
  return {
    type: DONETODO,
    index, //index:index
  };
};
