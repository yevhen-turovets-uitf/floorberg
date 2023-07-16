import styled from 'styled-components';
import { DocumentSolid as DocumentSolidUI } from '@skbkontur/react-icons';
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
  border-radius: 5px;
`;

export const FilesContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin-bottom: 8px;
  padding: 10px;
  width: calc(33.3% - 6px);
  cursor: pointer;
  border: 1px solid #2F80ED;
  border-radius: 5px;

  &:not(:nth-child(3n)) {
    margin-right: 9px;
  }

  &:hover ${DeleteContainer}{
    display: block;
  }
`;

export const File = styled(GS.FlexContainer)`
  color: #2F80ED;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;

export const DocumentSolid = styled(DocumentSolidUI)`
  & svg {
    width: 64px;
    height: 64px;
  }
`;

export const Caution = styled.div`
  color: #d74f4f;
`;

export const FileInput = styled.label`
  padding: 8px 15px 10px;
  cursor: pointer;
  display: inline;
`;
