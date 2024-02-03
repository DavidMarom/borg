"use client";
import styled from 'styled-components';

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

`;

