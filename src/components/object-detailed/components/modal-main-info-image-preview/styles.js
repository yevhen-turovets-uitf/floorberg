import styled from 'styled-components';
import * as GS from 'src/styles/styles';
import { ArrowChevronLeft, ArrowChevronRight } from '@skbkontur/react-icons';

export const BodyWrapper = styled(GS.FlexContainer)`
  .arrow svg {
    width: 50px;
    height: 50px;
    fill: gray;
    cursor: pointer;
  }

  .arrow svg:hover {
    fill: #373737;
  }

  & > img {
    display: block;
    width: calc(100% - 100px);
  }
`;

const Arrow = `
  & svg {
    width: 50px;
    height: 50px;
    fill: gray;
    cursor: pointer;
  }

  & svg:hover {
    fill: #373737;
  }
`;

export const ArrowLeft = styled(ArrowChevronLeft)`
  ${Arrow}
`;

export const ArrowRight = styled(ArrowChevronRight)`
  ${Arrow}
`;
