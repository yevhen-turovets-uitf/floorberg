import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const ModalHeaderWrapper = styled(GS.ModalHeaderWrapper)``;

export const DeleteContainer = styled.div`
  display: none;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85));
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const ImagesContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin-bottom: 8px;
  width: calc(33.3% - 6px);
  cursor: pointer;
  border: 1px solid #000000;

  &:not(:nth-child(3n)) {
    margin-right: 9px;
  }

  &:hover ${DeleteContainer}{
    display: block;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Caution = styled.div`
  color: #d74f4f;
`;

export const FileInput = styled.label`
  padding: 8px 15px 10px;
  cursor: pointer;
  display: inline;
`;
