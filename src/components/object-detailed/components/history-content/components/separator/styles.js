import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: calc(100% - 55px);
  height: 1px;
  background: #EAE4E4;
  margin: ${({ $text }) => (
    $text === 'запланировано'
      ? '20px 0 30px 55px'
      : '50px 0 30px 55px'
  )};
`;

export const Text = styled.div`
  position: absolute;
  width: 170px;
  height: 25px;
  left: calc(50% - 85px);
  top: -12px;
  color: white;
  font-weight: 700;
  border-radius: 10px;
  background: ${({ $text }) => (
    $text === 'запланировано'
      ? '#FF9E45'
      : '#1B9FFF'
  )};
`;
