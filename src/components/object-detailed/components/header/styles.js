import styled from 'styled-components';
import { Button as ButtonUI } from '@skbkontur/react-ui';
import * as GS from 'src/styles/styles';

export const Container = styled.div`
  width: 100%;
  padding: 30px 0 50px;
`;

export const FlexContainer = styled(GS.FlexContainer)``;

export const ObjectName = styled.div`
  position: relative;
  margin: 9px 30px 0;
  font-size: 20px;
  line-height: 22px;
  color: #373737;
`;

export const Button = styled(ButtonUI)`
  && > button {
    border-left: none;
  }
`;

export const CountContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 22px;
  height: 100%;
  font-weight: bold;
  font-size: 13px;
  color: white;
`;

export const Count = styled.div`
  width: 22px;
  height: 22px;
  background: #1D85D0;
  border-radius: 50%;
`;

export const HeaderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #F1F1F1;
`;
