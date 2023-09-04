import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./redux/modules/reduceToDo";
import Box from "./Box";
import { styled } from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  max-height: 800px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;
const Header = styled.div`
  border: 1px solid grey;
  padding: 10px;
  font-size: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

const Form = styled.form`
  border: none;
  background-color: lightgrey;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  input {
    border: none;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    margin-right: 10px;
  }
  button {
    margin: auto;
    border: none;
    background-color: teal;
    color: white;
    font-size: 15px;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 10px;
  }
  label {
    font-size: 15px;
    font-weight: bold;
  }
`;
const WorkingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 15px;
  width: 1000px;
`;
const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 80%;
  flex-wrap: wrap;
`;

function Home() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const todoIsDone = useSelector((state) => {
    return state.reduceToDo;
  });
  const todoList = todoIsDone.todoList;

  const notToDo = todoList
    .filter((item) => item.isDone == false)
    .map((item) =>
      item.title == "" ? null : (
        <Box
          key={item.id}
          title={item.title}
          comment={item.comment}
          isDone={item.isDone}
          id={item.id}
        />
      )
    );

  const doneToDo = todoList
    .filter((item) => item.isDone == true)
    .map((item) => (
      <Box
        key={item.id}
        title={item.title}
        comment={item.comment}
        isDone={item.isDone}
        id={item.id}
      />
    ));

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const commentChange = (e) => {
    setComment(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(title, comment));
    setTitle("");
    setComment("");
  };

  return (
    <Container>
      <Header>
        <div>ToDoList</div>
      </Header>
      <Form>
        <label htmlFor="title">제목 :&nbsp;</label>
        <input
          id="title"
          type="text"
          placeholder="할 일의 제목 입력하세요"
          value={title}
          onChange={titleChange}
        />
        <label htmlFor="comment">내용 :&nbsp;</label>
        <input
          id="comment"
          type="text"
          placeholder="할 일의 내용을 입력하세요"
          value={comment}
          onChange={commentChange}
        />
        <button onClick={onSubmit}>입력하기</button>
      </Form>
      <WorkingBox>
        <div>Working...🔥</div>
        <MainBox>{notToDo}</MainBox>
      </WorkingBox>
      <WorkingBox>
        <div>Done...🥳</div>
        <MainBox>{doneToDo}</MainBox>
      </WorkingBox>
    </Container>
  );
}

export default Home;
