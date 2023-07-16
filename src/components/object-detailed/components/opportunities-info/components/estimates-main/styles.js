import styled from 'styled-components';
import * as LS from '../../styles';

export const MenuItem = styled(LS.MenuItem)``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 45% 45% 10%;
  width: 100%;
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #E1E1E1;
  text-align: center;
  padding: 8px 0 10px;
`;

export const TableTitle = styled(TableCell)`
  background: #FBFBFB;
`;

export const TableLink = styled.a`
  color: #2F80ED;
`;
