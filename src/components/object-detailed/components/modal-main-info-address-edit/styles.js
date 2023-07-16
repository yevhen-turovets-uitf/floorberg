import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const ModalHeaderWrapper = styled(GS.ModalHeaderWrapper)``;

export const ModalInputContainer = styled(GS.ModalInputContainer)``;

export const VariantsContainer = styled(GS.VariantsContainer)`
  left: 0;
  top: 65px;
`;

export const VariantsItem = styled(GS.VariantsItem)` 
  &:hover {
    background: rgb(29, 133, 208);
    color: white;
  }
`;

export const InnerText = styled.div`
  &:not(:last-child) {
    margin: 0 0 10px;
  }
`;
