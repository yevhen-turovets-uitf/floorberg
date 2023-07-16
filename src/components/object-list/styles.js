import styled from 'styled-components';
import { Star as StarUI } from '@skbkontur/react-icons';
import * as GS from 'src/styles/styles';

export const ViewContainer = styled(GS.FlexContainer)`
  width: 100%;
  overflow-wrap: break-word;
  padding: 40px 0;
`;

export const FiltersColumn = styled.div`
  width: 280px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.14), 0px 1px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #D0D0D0;
`;

export const ContentColumn = styled.div`
  width: calc(100% - 280px);
  margin: 0 0 0 25px;
`;

export const TooltipContainer = styled.span`
  margin: 0 10px 0 0;
`;

export const TooltipName = styled.p`
  font-weight: 600;
  margin: 0 0 15px;
`;

export const TooltipContent = styled.p`
  color: #828282;
  margin: 0;
`;

export const TooltipContentStrong = styled.span`
  color: #333333;
`;

export const Star = styled(StarUI)`
  margin: 0 0 0 5px;
  color: #F2994A;

  svg {
    transform: scale(1.2);
  }
`;
