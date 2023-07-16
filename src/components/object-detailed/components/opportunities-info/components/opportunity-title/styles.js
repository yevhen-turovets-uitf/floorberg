import styled from 'styled-components';
import { ArrowTriangleUp as ArrowTriangleUpUI, ArrowTriangleDown as ArrowTriangleDownUI } from '@skbkontur/react-icons';
import * as GS from 'src/styles/styles';
import * as LS from '../../styles';

export const Container = styled(GS.FlexContainer)`
  background: #FBFBFB;
  border-bottom: 1px solid #E1E1E1;
`;

export const MenuItem = styled(LS.MenuItem)``;

export const InfoName = styled.div`
  width: calc(100% - 41px - 26px);
  padding: 10px 10px 10px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Arrow = `
  display: none;
  position: absolute;
  width: 100%;
  cursor: pointer;
  left: 0;

  & svg {
    width: 100%;
    height: 30px;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const ArrowTriangleUp = styled(ArrowTriangleUpUI)`
  ${Arrow}
  top: -24px;
`;

export const ArrowTriangleDown = styled(ArrowTriangleDownUI)`
  ${Arrow}
  bottom: -26px;
`;

export const ProbabilityWrapper = styled.div`
  position: relative;
  width: 41px;
  height: 41px;
  background: #767676;

  &:hover ${ArrowTriangleUp},
  &:hover ${ArrowTriangleDown} {
    display: block;
  }
`;

export const Probability = styled.div`
  width: 41px;
  height: 41px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  background: rgb(68, 198, 128, ${({ $percent }) => {
    if ($percent === 100) {
      return '1';
    }
    if ($percent === 5) {
      return '0.05';
    }
    return `0.${$percent}`;
  }});
  cursor: pointer;
  user-select: none;
`;
