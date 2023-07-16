import styled from 'styled-components';

export const DropContainer = styled.div`
  width: 280px;

  &:not(:last-child) {
    border-bottom: 1px solid #D0D0D0;
  }
`;

export const DropButton = styled.button.attrs(() => ({
  type: 'button'
}))`
  font-family: "Ubuntu", sans-serif;
  color: #333333;
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: none;
  box-shadow: none;
  text-align: left;
  border: none;
  border-left: 5px solid ${({ $leftBorder }) => ($leftBorder ? '#4583CC' : 'white')};
  border-radius: 0;
  padding: 0 20px;
  
  &:hover,
  &:focus,
  &:active {
    background: none;
    box-shadow: none;
    outline: none;
  }
`;

export const DropContent = styled.div`
  position: relative;
  padding: 0 20px 20px;
  border-left: 5px solid ${({ $leftBorder }) => ($leftBorder ? '#4583CC' : 'white')};
`;
