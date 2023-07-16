import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Center,
  Kebab,
  MenuSeparator
} from '@skbkontur/react-ui';
import {
  Edit,
  Info,
  Pin,
  DocumentSolid,
  Ok,
  Delete
} from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const OpportunityTitle = () => {
  const {
    activeOpportunity
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();

  const probabilityUp = () => {
    if (activeOpportunity.probability !== 100) {
      dispatch(objectDetailedActionCreator.changeOpportunity({
        opportunity: {
          id: activeOpportunity.id,
          probability: activeOpportunity.probability + 5
        }
      }));
    }
  };

  const probabilityDown = () => {
    if (activeOpportunity.probability !== 0) {
      dispatch(objectDetailedActionCreator.changeOpportunity({
        opportunity: {
          id: activeOpportunity.id,
          probability: activeOpportunity.probability - 5
        }
      }));
    }
  };

  return (
    <S.Container
      $align="center"
      $justify="space-between"
    >
      <S.InfoName>
        {activeOpportunity.name}
      </S.InfoName>
      {activeOpportunity.status === '0'
      && (
        <S.ProbabilityWrapper>
          {activeOpportunity.probability !== 100 && (
            <S.ArrowTriangleUp
              onClick={probabilityUp}
            />
          )}
          <S.Probability
            $percent={activeOpportunity.probability}
          >
            <Center>
              {activeOpportunity.probability}
            </Center>
          </S.Probability>
          {activeOpportunity.probability !== 0 && (
            <S.ArrowTriangleDown
              onClick={probabilityDown}
            />
          )}
        </S.ProbabilityWrapper>
      )}
      {activeOpportunity.status === '0'
      && (
        <Kebab
          style={{
            margin: '0 10px 0'
          }}
          size="medium"
        >
          <S.MenuItem
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityDataEdit(true))}
          >
            <Info />
            {' '}
            Изменить базовые данные
          </S.MenuItem>
          <S.MenuItem
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityDescriptionEdit(true))}
          >
            <Edit />
            {' '}
            {activeOpportunity.description ? 'Изменить описание' : 'Добавить описание'}
          </S.MenuItem>
          <S.MenuItem
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityAddRegistration(true))}
          >
            <Pin />
            {' '}
            Зарегистрировать
          </S.MenuItem>
          <S.MenuItem
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityFilesEdit(true))}
          >
            <DocumentSolid />
            {' '}
            {activeOpportunity.files.length > 0 ? 'Изменить файлы' : 'Добавить файлы'}
          </S.MenuItem>
          <MenuSeparator />
          <S.MenuItem
            onClick={() => dispatch(objectDetailedActionCreator.changeOpportunity({
              opportunity: {
                id: activeOpportunity.id,
                status: '1'
              }
            }))}
          >
            <Ok />
            {' '}
            Пометить выполненной
          </S.MenuItem>
          <S.MenuItem onClick={() => dispatch(objectDetailedActionCreator.changeOpportunity({
            opportunity: {
              id: activeOpportunity.id,
              status: '2'
            }
          }))}
          >
            <Delete />
            {' '}
            Пометить не актуальной
          </S.MenuItem>
        </Kebab>
      )}
    </S.Container>
  );
};

export default OpportunityTitle;
