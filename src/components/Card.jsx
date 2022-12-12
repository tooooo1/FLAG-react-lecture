import styled from "styled-components";

const Card = ({title = "로딩중", id = 0, thnumbnailUrl}) => {
    return(
    <Wrapper>
        <div>
        <div>{id}</div>;
        <div>{title}</div>
        <input type="checkbox" />
    </div>
    </Wrapper>
    );
};

export default Card;

const Wrapper = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
    font-weight: bold
`;