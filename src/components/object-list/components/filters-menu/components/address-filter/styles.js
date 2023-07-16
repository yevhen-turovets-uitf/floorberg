import styled from 'styled-components';
import * as GS from 'src/styles/styles';
import * as LS from '../../styles';

export const DropContainer = styled(LS.DropContainer)``;

export const DropButton = styled(LS.DropButton)``;

export const DropContent = styled(LS.DropContent)``;

export const VariantsContainer = styled(GS.VariantsContainer)`
  width: 500px;
  left: 20px;
  top: 35px;
`;

export const VariantsItem = styled(GS.VariantsItem)` 
  &:hover {
    background: rgb(29, 133, 208);
    color: white;
  }
`;
