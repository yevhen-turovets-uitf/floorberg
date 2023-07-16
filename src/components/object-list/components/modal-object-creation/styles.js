import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const ContentTitle = styled(GS.FlexContainer)`
  width: 100%;
`;

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

export const RedText = styled.span`
  color: #d74f4f;
`;

export const GreenText = styled.span`
  color: #219653;
`;
