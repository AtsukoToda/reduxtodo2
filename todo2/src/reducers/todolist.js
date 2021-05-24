import { ADDTODO, REMOVETODO, DONETODO } from "../actions";

const initialState = {
  todos: [
    { title: "サンプル1", flg: false },
    { title: "サンプル2", flg: false },
  ],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        todos: [...state.todos, action.todo],
      };

    case REMOVETODO:
      const newLists1 = [...state.todos];
      newLists1.splice(action.index, 1);
      return {
        todos: newLists1,
      };

    case DONETODO:
      const newLists2 = [...state.todos];
      newLists2[action.index].flg = !newLists2[action.index].flg;
      return {
        todos: newLists2,
      };

    default:
      return state;
  }
};

export default reducers;
