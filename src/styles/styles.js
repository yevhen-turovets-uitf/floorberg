import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  .react-ui * {
    font-family: "Ubuntu", sans-serif;
  }

  .react-ui div {
    isolation: auto !important;
  }

  .react-ui input[type=text],
  .react-ui input[type=password],
  .react-ui select {
    border: none;
    background: none;
  }

  .react-ui input[type=text]:hover,
  .react-ui input[type=password]:hover,
  .react-ui select {
    border: none;
    background: none;
  }

  .react-ui input[type=text]:focus,
  .react-ui input[type=password]:focus,
  .react-ui select {
    border: none;
    background: none;
  }

  .react-ui textarea,
  .react-ui textarea:hover,
  .react-ui textarea:focus {
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: none;
  }
`;

export const AppContainer = styled.div`
  font-size: 14px;
  line-height: 1.5;
  font-family: "Ubuntu", sans-serif;

  input[type=text], input[type=password], select {
    border: none;
  }

  input[type=text]:hover, input[type=password]:hover, select {
    border: none;
  }

  input[type=text]:focus, input[type=password]:focus, select {
    border: none;
    background: none;
  }

  textarea,
  textarea:hover,
  textarea:focus {
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: none;
  }

  .checkbox label, .radio label {
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction || 'row')};
  flex-wrap: ${({ $wrap }) => ($wrap || 'nowrap')};
  justify-content: ${({ $justify }) => ($justify || 'flex-start')};
  align-items: ${({ $align }) => ($align || 'stretch')};
`;

export const ModalHeaderWrapper = styled.div`
  font-size: 24px;
  line-height: 32px;
`;

export const ModalInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const VariantsContainer = styled.div`
  position: absolute;
  z-index: 11000;
  width: 100%;
  max-height: 330px;
  overflow-y: auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background: #E7E7E7;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: #B3B3B3;
  }
`;

export const VariantsItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 6px 10px;
  cursor: pointer;
  background: white;
`;

export const Dot = styled.span`
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #CFCFCF;
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgb(68, 198, 128, ${({ $percent }) => {
    if ($percent === 100) {
      return '1';
    }
    if ($percent < 10 && $percent > 0) {
      return `0.0${$percent}`;
    }
    return `0.${$percent}`;
  }});
  }
`;
