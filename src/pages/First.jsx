import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const city = ["서울", "경기", "제주", "인천"]
const First = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState("서울");
  
  const onChangeHandler = (e) => {
    setPlace(e.currentTarget.value)
  }
  return (
    <Wrapper>
      <div>위치 그림</div>
      <SubTitle>한 눈에 확인하는</SubTitle>
      <Title>랭킹먼지</Title>
      <Text>미세먼지 농도가 궁금한 지역은?</Text>
      <select value={place} onChange={onChangeHandler}>
        {city.map((v) => (<option value={v}>{v}</option>))}
      </select>
      <button onClick={() => navigate('/second', {state: place})} color={'#2886A6'}>검색</button>
    </Wrapper>
  );
};

export default First;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(83, 202, 242);
  color: white;
`;

const Title = styled.div`
  font-size: 14vw;
  padding-bottom: 1.5rem;
`;

const SubTitle = styled.div`
  font-size: 5vw;
  padding: 1rem 0;
`;

const Text = styled.div`
  font-size: 3.5vw;
  margin-bottom: 1.5vh;
`;
