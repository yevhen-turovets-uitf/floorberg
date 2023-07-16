import styled from 'styled-components';
import * as GS from 'src/styles/styles';
import * as LS from '../../styles';

export const InfoEmpty = styled(LS.InfoEmpty)``;

export const InfoHelpText = styled(LS.InfoHelpText)``;

export const Container = styled(GS.FlexContainer)`
  margin: 0 0 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;

export const File = styled(GS.FlexContainer)`
  color: #2F80ED;
  margin: 0 15px 0 0;
`;

export const FileLink = styled.a`
  color: #2F80ED;
`;

