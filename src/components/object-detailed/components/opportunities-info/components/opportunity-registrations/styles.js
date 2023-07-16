import styled from 'styled-components';
import * as GS from 'src/styles/styles';
import * as LS from '../../styles';

export const InfoEmpty = styled(LS.InfoEmpty)``;

export const InfoHelpText = styled(LS.InfoHelpText)``;

export const Container = styled.div`
  margin: 0 0 6px;
`;

export const RegistrationButton = styled.button.attrs(() => ({
  type: 'button'
}))`
  margin: 0 0 10px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover,
  &:focus,
  &:active {
    border: none;
    background: none;
  }
`;

export const Confirmed = styled(GS.FlexContainer)`
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  color: ${({ $red }) => ($red ? '#EB5757' : '#333333')};
`;
