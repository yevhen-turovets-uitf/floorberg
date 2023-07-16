import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.FlexContainer)`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #E2E2E2;
  color: #333333;
`;

export const ButtonsContainer = styled.div`
  width: 45px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TooltipContent = styled(GS.FlexContainer)`
  color: #333333;

  &:not(:last-child) {
    margin: 0 0 20px;
  }
`;

export const Button = styled.button.attrs(() => ({
  type: 'button'
}))`
  color: #3072C4;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover,
  &:focus,
  &:active {
    background: none;
    border: none;
  }

  &:not(:last-child) {
    font-weight: bold;
  }

  &[disabled] {
    color: #828282;
    cursor: default;
  }
`;

export const AddTime = styled(Button)`
  margin: 5px 10px;
`;

export const Time = styled.div`
  color: #333333;
  margin: 4px 0;
`;
