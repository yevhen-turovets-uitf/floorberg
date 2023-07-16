import styled from 'styled-components';

export const TooltipContent = styled.p`
  color: #333333;
  margin: 0;
`;

export const ButtonsContainer = styled.div`
  background: #EAEAEA;
`;

export const ContentContainer = styled.div`
  height: calc(100vh - 80px);
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background: #E7E7E7;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: #B3B3B3;
  }
`;
