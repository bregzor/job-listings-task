import styled from "styled-components";

export const List = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 80vw;
`;

export const CardListItem = styled.article`
display: flex;
flex-direction: column;
width: 18vw;
overflow: hidden;
height: 300px;
background: #cacaca;
margin: 1vw;
margin-left:0px;
min-width:200px;
padding: 30px;
font-size:12px;
background-color: rgb(239 239 239);
font-family: 'Roboto', sans-serif;
border-radius:5px;

&:hover {
    background-color:rgb(239 239 150);
}

`;
