import styled from 'styled-components';
import * as GS from 'src/styles/styles';
import * as LS from '../../styles';

export const InfoEmpty = styled(LS.InfoEmpty)``;

export const InfoHelpText = styled(LS.InfoHelpText)``;

export const Container = styled(GS.FlexContainer)``;

export const InfoImageContainer = styled.div`
  margin-bottom: 8px;
  width: calc(33.3% - 6px);
  cursor: pointer;

  &:not(:nth-child(3n)) {
    margin-right: 9px;
  }
`;

export const InfoImage = styled.img`
  display: block;
  width: 100%;
`;
