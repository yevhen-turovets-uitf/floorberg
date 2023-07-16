import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const ModalHeaderWrapper = styled(GS.ModalHeaderWrapper)``;

export const InnerText = styled.div`
  &:not(:last-child) {
    margin: 0 0 15px 0;
  }
`;

export const GreyText = styled.span`
  color: #828282;
`;

export const BoldText = styled.span`
  font-weight: 600;
`;
