import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px;
  font-size: 14px;
`;

export const DataBlock = styled.div`
  &:not(:last-child) {
    margin: 0 0 15px;
  }
`;

export const NotControledTask = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #E2E2E2;
  color: #333333;
  white-space: pre-wrap;
`;
