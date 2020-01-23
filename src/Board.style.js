// import React from 'react';
import styled from 'styled-components';

 const Box = styled.div`
    display: flex;
    height : 570px;
    background-color:lightblue;
    justify-content: center;
    overflow: hidden;
    margin-top:90px;
    align-items: center;
`;

export const BoxColumn = styled.div`
    margin:5px;
    width: 100px;
    float: left;
    `; 



export const NewGameButton = styled.button`
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 18px;
    height: 40px;
    width: 200px;
    background-color: aqua;
`;

export default Box;