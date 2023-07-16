import styled from 'styled-components';
import * as GS from 'src/styles/styles';
import * as LS from '../../styles';

export const PossibleEmployee = styled(GS.FlexContainer)`
  position: relative;
  width: 100%;
  color: #828282;
  padding: 0 60px 0;
  box-shadow: 0 0 0 1px #E1E1E1;
  min-height: 191px;
`;

export const PossibleEmployeeData = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const PossibleEmployeePosition = styled.div`
  font-size: 11px;
  line-height: 14px;
`;

export const PossibleEmployeeName = styled.div`
  line-height: 1.2;
`;

export const MenuItem = styled(LS.MenuItem)``;
