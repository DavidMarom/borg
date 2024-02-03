"use client";
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
  opacity: 0;
  width: 0;
  height: 0px;
}
50% {
  opacity: 1;
  width: 500px;
  height: 0px;
}
100% {
  height: 500px;
}
`;

export const CardContainer = styled.div`
  height: 500px;
  width: 500px;
  padding: 20px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
  margin-top: ${({ margintop }) => margintop};
  border: 1px solid #2beded22;

  overflow: hidden;
  overflow-y: auto;

  animation: fadeOut .4s;
  animation-name: ${fadeIn};


`;

