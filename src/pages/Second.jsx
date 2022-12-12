import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

const Second = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const locationCity = location.state;

  useEffect (() => {
    axios("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.data)
    .then((json) => setData(json));
  }, []);
  

  return (
    <Wrapper>
      <div>{locationCity}</div>
      {data.map((v) => (
          <Card id="1" title="hi" />
        ))}
    </Wrapper>
  );
};

export default Second;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(83, 202, 242);
`;
