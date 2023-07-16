import styled from 'styled-components';
import * as LS from '../../styles';

export const DropContainer = styled(LS.DropContainer)``;

export const DropButton = styled(LS.DropButton)``;

export const DropContent = styled(LS.DropContent)``;

export const RadioButton = styled.div`
  &:not(:last-child) {
    margin: 0 0 15px 0;
  }

  & span {
    background: none;
  }
`;

export const Count = styled.span`
  color: #828282;
`;
