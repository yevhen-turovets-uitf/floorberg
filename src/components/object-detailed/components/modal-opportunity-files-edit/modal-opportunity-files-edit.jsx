import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Center, Spinner, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { DocumentFolder, Trash } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalOpportunityFilesEdit = () => {
  const {
    activeOpportunity
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();
  const [cautionRepeating, setCautionRepeating] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [activeOpportunity.files]);

  const onAddFile = e => {
    setCautionRepeating(false);
    const [file] = e.target.files;

    if (activeOpportunity.files.find(elem => file.name === `${elem.name}.${elem.ext}`)) {
      setCautionRepeating(true);
    } else {
      setLoading(true);
      dispatch(objectDetailedActionCreator.changeOpportunity({
        opportunity: {
          id: activeOpportunity.id
        },
        files: file
      }));
      e.target.value = null;
    }
  };

  const onRemoveFile = name => {
    dispatch(objectDetailedActionCreator.changeOpportunity({
      opportunity: {
        id: activeOpportunity.id
      },
      deleteFiles: name
    }));
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalOpportunityFilesEdit())}
        style={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          fontSize: '14px',
          lineHeight: '20px',
          fontFamily: '"Ubuntu", sans-serif',
          color: '#333333'
        }}
      >
        <Modal.Header>
          <S.ModalHeaderWrapper>
            Файлы
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          {!isLoading
            ? (
              <>
                {activeOpportunity.files.length > 0
                  ? activeOpportunity.files.map(item => (
                    <S.FilesContainer key={item.url}>
                      <S.File
                        $align="center"
                        $direction="column"
                      >
                        <S.DocumentSolid />
                        <div>
                          {item.name}
                        </div>
                      </S.File>
                      <S.DeleteContainer>
                        <Center>
                          <Button onClick={() => onRemoveFile(`${item.name}.${item.ext}`)}>
                            <Trash />
                          </Button>
                        </Center>
                      </S.DeleteContainer>
                    </S.FilesContainer>
                  ))
                  : 'Сейчас нет добавленных файлов, нажмите на кнопку загрузить, что бы их добавить'}
                {cautionRepeating
                  && (
                    <S.Caution>
                      Файл с таким названием уже существует
                    </S.Caution>
                  )}
              </>
            )
            : (
              <Center>
                <Spinner />
              </Center>
            )}
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            style={{
              margin: '0 10px 0 0'
            }}
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityFilesEdit())}
          >
            Закрыть
          </Button>
          <Button
            style={{
              margin: '0 10px 0 0'
            }}
            size="medium"
            onClick={() => {}}
          >
            <S.FileInput>
              <DocumentFolder />
              {' '}
              Загрузить
              <input
                type="file"
                accept="image/*"
                onChange={onAddFile}
                hidden
              />
            </S.FileInput>
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalOpportunityFilesEdit;
