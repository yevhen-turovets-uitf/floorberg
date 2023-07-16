import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.FlexContainer)`
  margin: 0 0 30px;
`;

export const FlexContainer = styled(GS.FlexContainer)``;

export const Name = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 360px;
  ${({ $closed }) => ($closed ? 'text-decoration: line-through;' : '')}
`;

export const Closed = styled.span`
  text-decoration: line-through;
`;

export const Dot = styled(GS.Dot)`
  margin: 0 0 0 10px;
  ${({ $red }) => ($red ? 'background: #d74f4f;' : '')}
`;

