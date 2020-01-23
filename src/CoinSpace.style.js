// import React from 'react';
import styled from 'styled-components';

export const RedAnimateCoin = styled.div`
    width: 63px;
    height: 63px;
    border-radius:50%;
    background-color: red;
    position: relative;
    animation-name: examplered;
    animation-duration: 2s;
    
    
    @keyframes examplered {
      0%   {background-color:red; left:-3px; top:-600px;}
      100% {background-color:red; left:-3px; top:-20px;}
    }
`;

export const GreenAnimateCoin = styled.div`
    width: 63px;
    height: 63px;
    border-radius:50%;
    background-color: green;
    position: relative;
    animation-name: example;
    animation-duration: 2s;
    
    @keyframes example {
      0%   {background-color:green; left:-3px; top:-600px;}
      100% {background-color:green; left:-3px; top:0px;}
    }
`;

const Coin = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border : 0.7px solid black;
  border-radius: 50%;
  &:hover{
      box-shadow: 7px 4px #888888;
      border : 4px solid black;
  }
  padding :16px;
  margin:4px;
  margin-top:10px;
`;
export const RedCoin = styled.div`
  height: 50px;
  width: 50px;
  background-color: red;
  border : 0.7px solid black;
  border-radius: 50%;
  &:hover{
      box-shadow: 7px 4px #888888;
      border : 4px solid black;
  }
  padding :16px;
  margin:4px;
  margin-top:10px;
`;
export const GreenCoin = styled.div`
  height: 50px;
  width: 50px;
  background-color:green;
  border : 0.7px solid black;
  border-radius: 50%;
  &:hover{
      box-shadow: 7px 4px #888888;
      border : 4px solid black;
  }
  padding :16px;
  margin:4px;
  margin-top:10px;
`;


export default Coin;