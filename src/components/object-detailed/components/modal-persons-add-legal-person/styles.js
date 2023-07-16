import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const ModalHeaderWrapper = styled(GS.ModalHeaderWrapper)``;

export const ModalInputContainer = styled(GS.ModalInputContainer)``;

export const VariantsContainer = styled(GS.VariantsContainer)`
  left: 0;
  top: 45px;
  font-size: 16px;
  line-height: 22px;
`;

export const VariantsItem = styled(GS.VariantsItem)`
  padding: 0;
  ${({ $color }) => ($color ? 'background: #E3FFEF;' : '')}
`;

export const VariantsItemMask = styled.div`
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;

  &:hover {
    background: rgba(184, 184, 184, 0.2);
  }
`;

export const MainInfo = styled(GS.FlexContainer)`
  margin: 0 0 5px 0;
`;

export const Address = styled.div`
  font-size: 14px;
  color: #878787;
  margin: 0 0 5px 0;
`;

export const Post = styled.div`
  font-size: 14px;
  color: #878787;
`;

export const CounterpartiesInn = styled.div`
  color: #878787;
`;

export const AddingError = styled.div`
  margin: 0 0 15px 15px;
  color: #EB5757;
`;

export const CounterpartiesInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  row-gap: 15px;
  width: 100%;
`;

export const CounterpartiesRole = styled.div`
  margin: 15px 0;
`;
