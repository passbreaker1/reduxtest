import { act } from "react-dom/test-utils";

// action value
const ADD_ONE = "ADD_ONE";
const DELETE_ONE = "DELETE_ONE";
const TOGGLE_ONE = "TOGGLE_ONE";
// action Creator
export const addToDo = (title, comment) => {
  return {
    type: ADD_ONE,
    title: title,
    comment: comment,
    isDone: false,
    id: Date.now(),
  };
};
export const deleteToDo = (id) => {
  return {
    type: DELETE_ONE,
    id,
  };
};

export const toggleToDo = (id) => {
  return {
    type: TOGGLE_ONE,
    id,
  };
};
// 초기값
const initalState = {
  todoList: [
    {
      id: 0,
      title: "",
      comment: "",
      isDone: false,
    },
  ],
};

// 리듀서 함수
const reduceToDo = (state = initalState, action) => {
  const newState = { ...state };
  const newToDoList = [...newState.todoList, action];
  switch (action.type) {
    case ADD_ONE:
      return {
        todoList: newToDoList,
      };
    case DELETE_ONE:
      const deleteBox = newState.todoList.filter(
        (item) => action.id !== item.id
      );
      return { todoList: deleteBox };
    case TOGGLE_ONE:
      newState.todoList.forEach((item) =>
        action.id == item.id ? (item.isDone = !item.isDone) : item
      );
      return { todoList: newState.todoList };
    default:
      return newState;
  }
};

// 모듈을 스토어와 연결

export default reduceToDo;
