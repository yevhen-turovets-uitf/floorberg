import styled from 'styled-components';
import { MenuItem as MenuItemUI, Textarea as TextareaUI, Button as ButtonUI } from '@skbkontur/react-ui';
import * as GS from 'src/styles/styles';

export const Container = styled.div`
  color: #373737;
`;

export const Counterparties = styled.div`
  margin: 25px 30px 25px 0;
  border: 1px solid #E1E1E1;
`;

export const FlexConteiner = styled(GS.FlexContainer)``;

export const TooltipContent = styled.p`
  color: #333333;
  margin: 0;
`;

export const MenuItem = styled(MenuItemUI)`
  color: #373737;
  font-size: 14px;
  line-height: 1.5;
  font-family: "Ubuntu", sans-serif;
`;

export const AddEmployee = styled.div`
  width: 100%;
  height: 191px;
`;

export const BlockAddText = styled.div`
  color: #828282;
  width: 400px;
  margin: 0 0 0 35px;
`;

export const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 1px;
`;

export const Textarea = styled(TextareaUI)`
  textarea {
    height: 82px;
    min-width: 0;
  }
`;

export const Button = styled(ButtonUI)`
  && button {
    height: 82px;
    color: #828282;
  }
`;
