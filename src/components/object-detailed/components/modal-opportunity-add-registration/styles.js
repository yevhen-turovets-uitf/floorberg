import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const ModalHeaderWrapper = styled(GS.ModalHeaderWrapper)``;

export const ContentText = styled.div`
  margin: 0 0 15px;
`;

export const RadioButton = styled.div`
  &:not(:last-child) {
    margin: 0 0 15px 0;
  }

  & span {
    background: none;
  }
`;

export const Comment = styled.span`
  color: #828282;
`;
