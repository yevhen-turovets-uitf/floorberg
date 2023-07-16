import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const ModalHeaderWrapper = styled(GS.ModalHeaderWrapper)``;

export const ContentTitle = styled.div`
  margin: 0 0 30px;
`;

export const Name = styled.div`
  color: #000000;
  margin: 0 0 15px 0;
`;

export const PhonesDataContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(48px + 15px + 25%) calc(75% - 48px);
  column-gap: 13px;
  row-gap: 13px;
`;

export const FlexContainer = styled(GS.FlexContainer)``;

export const PhoneRow = styled(GS.FlexContainer)`
  margin: 0 0 15px 0;
`;

export const NameRow = styled(GS.FlexContainer)`
  margin: 0 0 15px 0;
`;
