import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo, doneTodo } from "../actions/index";

const App = (props) => {
  const [taskValue, setTask] = useState("");

  const createTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (taskValue === "") return;
    props.addTodo(taskValue);
    setTask("");
  };

  const removeTask = (index) => {
    props.removeTodo(index);
  };

  const doneTask = (index) => {
    props.doneTodo(index);
  };
  return (
    <React.Fragment>
      <h1>todoリスト</h1>
      <input value={taskValue} onChange={createTask} />

      <button onClick={addTask}>追加</button>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>
            {todo.flg ? <del>{todo.title}</del> : <span>{todo.title}</span>}
            {todo.flg ? (
              <button onClick={() => doneTask(index)}>未了</button>
            ) : (
              <button onClick={() => doneTask(index)}>完了</button>
            )}
            <button onClick={() => removeTask(index)}>削除</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todolist.todos,
});


const mapDispatchToProps = (dispatch) => ({
  addTodo: (task) => dispatch(addTodo(task)),
  removeTodo: (index) => dispatch(removeTodo(index)),
  doneTodo: (index) => dispatch(doneTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
