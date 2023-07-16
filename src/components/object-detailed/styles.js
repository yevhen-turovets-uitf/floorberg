import styled from 'styled-components';

export const ViewContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ $isSmallScreen }) => (
    $isSmallScreen
      ? 'calc(100% - 100px) 100px'
      : '60% 40%'
  )};
  width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const MainColumn = styled.div``;

export const HistoryColumn = styled.div`
  background: #F7F6F6;
`;
