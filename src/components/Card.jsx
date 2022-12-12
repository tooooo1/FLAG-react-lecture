import styled from "styled-components";

const Card = ({title, id, thumbnailUrl}) =>{
    return( 
    <Wrapper>
        <div>{title}</div>
        <div>{id}</div>
        <input type="checkbox"/>
    </Wrapper>

    );
};

export default Card;

const Wrapper = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  font-weight: bold;
`;
