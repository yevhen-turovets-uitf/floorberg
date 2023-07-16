import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@skbkontur/react-ui';
import { DocumentSolid } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const OpportunityFiles = () => {
  const {
    activeOpportunity
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();

  if (activeOpportunity.files.length <= 0) {
    return (
      <S.InfoEmpty
        $align="center"
        $justify="space-between"
      >
        <Button
          disabled={!(activeOpportunity.status === '0')}
          onClick={() => {
            if (activeOpportunity.status === '0') {
              dispatch(objectDetailedActionCreator.setModalOpportunityFilesEdit(true));
            }
          }}
        >
          <DocumentSolid />
          {' '}
          Добавить файлы
        </Button>
        <S.InfoHelpText>
          Прикрепляйте полученную документацию,
          вроде узлов, планов и тех заданий, все в одном месте это удобно!
        </S.InfoHelpText>
      </S.InfoEmpty>
    );
  }
  return (
    <S.Container
      $align="center"
      $wrap="wrap"
    >
      {activeOpportunity.files.map(file => (
        <S.File
          key={file.url}
          $align="center"
        >
          <DocumentSolid size="large" />
          {' '}
          <S.FileLink
            href={file.url}
            target="_blank"
            rel="noreferrer"
          >
            {`${file.name}.${file.ext}`}
          </S.FileLink>
        </S.File>
      ))}
    </S.Container>
  );
};

export default OpportunityFiles;
