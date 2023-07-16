import styled from 'styled-components';
import { NewWindow as NewWindowUI } from '@skbkontur/react-icons';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.FlexContainer)`
  width: 100%;
`;

export const TooltipContent = styled.p`
  color: #333333;
  margin: 0;
`;

export const ButtonsContainer = styled(GS.FlexContainer)`
  padding: 25px;
`;

export const SidebarButton = styled.button.attrs(() => ({
  type: 'button'
}))`
  width: 100%;
  height: 70px;
  background: #E0E0E0;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: none;
    background: #d1d1d1;
  }
`;

export const NewWindow = styled(NewWindowUI)`
  svg {
    width: 30px;
    height: 30px;
    fill: #565555;
  }
`;
