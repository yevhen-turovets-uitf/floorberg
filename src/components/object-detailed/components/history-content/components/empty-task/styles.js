import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.FlexContainer)`
  color: #333333;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  background: #FF9E45;
  margin: 15px 15px 0 0;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: calc(100% - 55px);
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.14), 0px 1px 6px rgba(0, 0, 0, 0.1);
`;
