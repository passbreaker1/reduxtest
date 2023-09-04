import React from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid grey;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 10px 0 10px;
  button {
    padding: 5px 15px;
    border-radius: 5px;
    border: 1px solid lightgray;
    background-color: white;
  }
  div {
    font-size: 15px;
    font-weight: 600;
  }
`;
const Main = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100px;

  div {
    font-size: 25px;
    font-weight: bold;
    line-height: 200%;
  }
  span {
    font-size: 15px;
  }
`;
function Detail() {
  const { id, title, comment } = useParams();

  return (
    <Body>
      <Card>
        <Header>
          <div>ID : {id}</div>
          <button>
            <Link to="/">이전으로</Link>
          </button>
        </Header>
        <Main>
          <div>{title}</div>
          <span>{comment}</span>
        </Main>
      </Card>
    </Body>
  );
}

export default Detail;
