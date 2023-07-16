import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as GS from 'src/styles/styles';
import * as LS from '../../styles';

export const Container = styled.div`
  width: 100%;
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 3fr 10fr 10fr 4fr 4fr 10fr;

  @media (max-width: 1440px) {
    font-size: 13px;
    grid-template-columns: 1fr 3fr 10fr 10fr 4fr 10fr;
  }
`;

export const ColumnTitle = styled.span`
  color: #828282;
  user-select: none;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #EAEAEA;
  padding: 15px 10px;
  text-align: center;
  justify-content: center;

  ${({ $sort }) => ($sort
    ? `
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      `
    : '')}

  @media (max-width: 1440px) {
    ${({ $removed }) => ($removed
    ? `
        display: none;
      `
    : '')}
  }
`;

export const Dot = styled(GS.Dot)``;

export const NavItem = styled(NavLink)`
  &,
  &:hover,
  &:visited {
    text-decoration: none;
    color: #333333;
  }

  display: flex;
  align-items: center;
  border-bottom: 2px solid #EAEAEA;
  padding: 15px 10px;

  ${({ $centered }) => ($centered
    ? `
      text-align: center;
      justify-content: center;
    `
    : '')}

  ${({ $uppercase }) => ($uppercase
    ? `
      font-weight: 600;
      text-transform: uppercase;
    `
    : '')}

  @media (max-width: 1440px) {
    ${({ $removed }) => ($removed
    ? `
        display: none;
      `
    : '')}
  }
`;

export const Star = styled(LS.Star)``;

export const TooltipContainer = styled(LS.TooltipContainer)``;

export const TooltipName = styled(LS.TooltipName)``;

export const TooltipContent = styled(LS.TooltipContent)``;

export const TooltipContentStrong = styled(LS.TooltipContentStrong)``;
