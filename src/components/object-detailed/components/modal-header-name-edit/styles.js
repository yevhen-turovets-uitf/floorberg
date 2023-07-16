import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const ModalHeaderWrapper = styled(GS.ModalHeaderWrapper)``;

export const ModalInputContainer = styled(GS.ModalInputContainer)``;

export const InnerText = styled.div`
  &:not(:last-child) {
    margin: 0 0 10px;
  }
`;

export const RedText = styled.span`
  color: #d74f4f;
`;

export const GreenText = styled.span`
  color: #219653;
`;
