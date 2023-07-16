import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled.div`
  width: 100%;
`;

export const MenuContainer = styled(GS.FlexContainer)`
  margin: 0 0 15px;
`;

export const FiltersContainer = styled(GS.FlexContainer)``;

export const RightMenu = styled(GS.FlexContainer)`
  @media (max-width: 1024px) {
      & {
        flex-direction: row-reverse;
      }
    }
`;

export const SwitchContainer = styled.div`
  margin: 0 0 0 0;

  .left button {
    border-radius: 2px 0 0 2px;
  }
  
  .right button {
    border-radius: 0 2px 2px 0;
  }
`;
