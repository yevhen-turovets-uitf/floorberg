import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const ModalHeaderWrapper = styled(GS.ModalHeaderWrapper)``;

export const ContentText = styled.div`
  margin: 0 0 15px;
`;

export const Confirmed = styled(GS.FlexContainer)`
  ${({ $red }) => ($red
    ? 'color: #EB5757;'
    : ''
  )}
  margin: 0 0 20px;
`;

export const Comment = styled.div`
  width: 300px;
`;
