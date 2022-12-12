const Card = ({title = "나는야 로딩중", id, thumbnailUrl}) => {
    return (
    <Wrapper>
        <div>{id}</div>
        <div>{title}</div>
        <input type="checkbox"/>
    </Wrapper>
    );
};

export default Card;

const Wrapper = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
    font-weight:bold;
`;