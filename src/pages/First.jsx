import styled from "styled-components";

const First = () => {
  return (
    <Wrapper>
      <div>위치 그림</div>
      <div>한 눈에 확인하는</div>
      <div>랭킹먼지</div>
      <div>미세먼지 농도가 궁금한 지역은?</div>
      <div>서울</div>
      <div>검색</div>
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
`;
