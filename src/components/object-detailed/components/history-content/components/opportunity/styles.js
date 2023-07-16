import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled.div`
  color: #333333;
  margin: 0 0 5px 10px;
`;

export const Dot = styled(GS.Dot)`
  margin: 0 10px 0 0;
  
  &:after {
    ${({ $red }) => ($red ? 'background: #d74f4f;' : '')}
  }
`;

export const Title = styled.span`
  ${({ $closed }) => ($closed ? 'text-decoration: line-through;' : '')}
`;
