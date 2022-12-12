import styled from "styled-components";

const Second = () => {
  return (
    <Wrapper>
      <div>위치 그림</div>
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
