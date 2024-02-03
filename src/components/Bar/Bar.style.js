"use client";
import styled from 'styled-components';

export const BarContainer = styled.div`
  height: 80px;
  width: 100%;
  
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(4px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);

  margin-top: ${({ margintop }) => margintop};

  position: ${({ sticky }) => (sticky ? 'fixed' : 'relative')};
  top: ${({ sticky }) => (sticky ? '0' : 'none')};
  z-index: 100;


`;

