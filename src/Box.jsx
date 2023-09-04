import React from "react";
import { useDispatch } from "react-redux";
import { toggleToDo, deleteToDo } from "./redux/modules/reduceToDo";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 2px solid teal;
  flex-direction: column;
  border-radius: 7px;
  span {
    font-size: 15px;
    color: black;
    margin-left: 10px;
  }
  div {
    font-size: 25px;
    font-weight: bold;
    margin-left: 10px;
  }
`;
const ButtonStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;
const Remove = styled.button`
  border: 2px solid red;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: white;
  margin-right: 10px;
  width: 60px;
`;
const Complete = styled(Remove)`
  border: 2px solid teal;
`;
function Box(props) {
  const dispatch = useDispatch();
  const toggleBtn = () => {
    dispatch(toggleToDo(props.id));
  };
  const removeBtn = () => {
    dispatch(deleteToDo(props.id));
  };

  return (
    <Container>
      <Link to={`/detail/${props.id}/${props.title}/${props.comment}`}>
        <span>상세보기</span>
      </Link>
      <div>{props.title}</div>
      <span>{props.comment}</span>
      <ButtonStyled>
        <Complete onClick={toggleBtn}>
          {props.isDone ? "취소" : "완료"}
        </Complete>
        <Remove onClick={removeBtn}>삭제</Remove>
      </ButtonStyled>
    </Container>
  );
}

export default Box;
