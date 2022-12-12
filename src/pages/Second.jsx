import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Card from "../components/Card";

const Second = () => {
  const [data, setData] = useState([])
  const location = useLocation();
  const loactionCity = location.state;
  
 useEffect(() => {
  axios('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.data)
  .then((res) => setData(res))
 }, [])

  return (
    <Wrapper>
      <div>{loactionCity}</div>
      {
        data?.map((v) => (
          <Card
          id={v.id}
          title={v.title} />
        ))
      }
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
