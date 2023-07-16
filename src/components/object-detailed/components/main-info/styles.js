import styled from 'styled-components';
import { MenuItem as MenuItemUI } from '@skbkontur/react-ui';
import * as GS from 'src/styles/styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  column-gap: 24px;
  width: 100%;
  padding: 0 30px 0 0;
  color: #373737;
  margin: 0 0 25px;
`;

export const MenuItem = styled(MenuItemUI)`
  color: #373737;
  font-size: 14px;
  line-height: 1.5;
  font-family: "Ubuntu", sans-serif;
`;

export const InfoBlock = styled.div`
  border: 1px solid #E1E1E1;
`;

export const InfoContent = styled.div`
  padding: 16px 16px 8px;
`;

export const InfoEmpty = styled(GS.FlexContainer)`
  margin: 0 0 16px;
`;

export const InfoHelpText = styled.div`
  width: 55%;
  color: #828282;
`;

export const InfoSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: #F1F1F1;
  margin: 0 0 16px;
`;
