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
  background: white;
  margin: 1vw;
  margin-left: 0px;
  min-width: 200px;
  padding: 30px;
  font-size: 12px;

  font-family: "Roboto", sans-serif;
  border-radius: 5px;


  box-shadow:0px 0px 2px gray;
  color: #5f5f5f;

  &:hover {
    background-color: #8dbbc1;
    color:white;
    a {
        color:white;
    }
  }

  a {
    color: black;
    font-weight: bold;
  }

  h2 {
    text-decoration: underline;
  }

  img {

    height:100%

  }
`;

export const ImageWrapper = styled.div`
display: flex;
 width:90%;
 height:60px;
 margin:20px;
 margin-left:0;
 object-fit:cover;
 padding-bottom:10px;
 border-bottom: 1px solid gray;

`

export const DescriptionContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* after 3 line show ... */
  -webkit-box-orient: vertical;
`;
