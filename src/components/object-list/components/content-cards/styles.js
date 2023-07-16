import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as GS from 'src/styles/styles';
import * as LS from '../../styles';

export const Container = styled.div`
  width: 100%;
  margin: 15px 0;

  @media (max-width: 1440px) {
    font-size: 13px;
  }
`;

export const NavItem = styled(NavLink)`
  &,
  &:hover,
  &:visited {
    text-decoration: none;
    color: #333333;
  }

  display: block;
  padding: 20px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.14), 0px 1px 6px rgba(0, 0, 0, 0.1);
`;

export const ItemHeader = styled(GS.FlexContainer)``;

export const ItemName = styled(GS.FlexContainer)`
  width: 80%;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ItemId = styled.div`
  color: #828282;
`;

export const ItemAddress = styled(GS.FlexContainer)`
  margin: 15px 0 0;
`;

export const ItemAddressText = styled.span`
  margin: 0 5px;
  color: #828282;
`;

export const ItemDescription = styled.div`
  margin: 15px 0 0;
  white-space: pre-wrap;
`;

export const ItemInfo = styled(GS.FlexContainer)`
  margin: 15px 0 0;
`;

export const ItemDate = styled.div`
  margin: 0 50px 0 0;
`;

export const Dot = styled(GS.Dot)``;

export const Star = styled(LS.Star)``;

export const TooltipContainer = styled(LS.TooltipContainer)``;

export const TooltipName = styled(LS.TooltipName)``;

export const TooltipContent = styled(LS.TooltipContent)``;

export const TooltipContentStrong = styled(LS.TooltipContentStrong)``;
