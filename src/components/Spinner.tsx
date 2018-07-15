import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  position: relative;
  height: 200px;
`;

const animate = keyframes`
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
`;

const shadow = keyframes`
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
`;

const LoaderBox = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  &:before {
    content: '';
    width: 50px;
    height: 5px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: ${shadow} 0.5s linear infinite;
  }
  &:after {
    content: '';
    width: 50px;
    height: 50px;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    animation: ${animate} 0.5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
`;

export default () => (
  <Wrapper>
    <LoaderBox />
  </Wrapper>
);
