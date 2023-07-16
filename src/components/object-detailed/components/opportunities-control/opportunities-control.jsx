import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Dropdown, MenuItem, MenuSeparator, MenuHeader, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { Add, Ok } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const OpportunitiesControl = () => {
  const {
    activeObject,
    activeOpportunity
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject,
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();
  const [opportunitiesInWork, setOpportunitiesInWork] = useState([]);
  const [completedOpportunities, setCompletedOpportunities] = useState([]);
  const [closedOpportunities, setClosedOpportunities] = useState([]);

  useEffect(() => {
    const inWork = [];
    const completed = [];
    const closed = [];

    activeObject.opportunities.forEach(item => {
      switch (item.status) {
        case '2':
          closed.push(item);
          break;
        case '1':
          completed.push(item);
          break;
        default:
          inWork.push(item);
      }
    });

    setOpportunitiesInWork(inWork);
    setCompletedOpportunities(completed);
    setClosedOpportunities(closed);
  }, [activeObject]);

  const drawOpportunitiesList = item => {
    switch (item.status) {
      case '2' || 2:
        return (
          <>
            <S.Name $closed>
              {item.name}
            </S.Name>
            <S.Dot $red />
          </>
        );
      case '1' || 1:
        return (
          <>
            <S.Name>
              {item.name}
            </S.Name>
            <Ok
              style={{
                margin: '0 0 0 10px'
              }}
              color="rgb(68, 198, 128)"
            />
          </>
        );
      default:
        return (
          <>
            <S.Name>
              {item.name}
            </S.Name>
            <S.Dot
              $percent={item.probability}
            />
          </>
        );
    }
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <S.Container>
        <Button
          size="large"
          style={{
            margin: '0 15px 0 0'
          }}
          onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityCreation(true))}
        >
          <Add size="large" />
          {' '}
          Создать
        </Button>
        {activeOpportunity && (
          <Dropdown
            size="large"
            width="440px"
            caption={(
              <S.FlexContainer
                $align="baseline"
              >
                {drawOpportunitiesList(activeOpportunity)}
              </S.FlexContainer>
            )}
          >
            {opportunitiesInWork.map(item => (
              <MenuItem
                style={{
                  fontSize: '16px',
                  lineHeight: '22px',
                  maxWidth: '600px'
                }}
                key={item.name}
                onClick={() => dispatch(objectDetailedActionCreator.getActiveOpportunity(item))}
              >
                {item.name}
                <S.Dot
                  $percent={item.probability}
                />
              </MenuItem>
            ))}
            {completedOpportunities.length > 0
            && (
              <>
                <MenuSeparator />
                <MenuHeader>Завершенные и неактульные</MenuHeader>
              </>
            )}
            {completedOpportunities.map(item => (
              <MenuItem
                style={{
                  fontSize: '16px',
                  lineHeight: '22px'
                }}
                key={item.name}
                onClick={() => dispatch(objectDetailedActionCreator.getActiveOpportunity(item))}
              >
                {item.name}
                <Ok
                  style={{
                    margin: '0 0 0 10px'
                  }}
                  color="rgb(68, 198, 128)"
                />
              </MenuItem>
            ))}
            {closedOpportunities.map(item => (
              <MenuItem
                style={{
                  fontSize: '16px',
                  lineHeight: '22px'
                }}
                key={item.name}
                onClick={() => dispatch(objectDetailedActionCreator.getActiveOpportunity(item))}
              >
                <S.Closed>
                  {item.name}
                </S.Closed>
                <S.Dot $red />
              </MenuItem>
            ))}
          </Dropdown>
        )}
      </S.Container>
    </ThemeContext.Provider>
  );
};

export default OpportunitiesControl;
