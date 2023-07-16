import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Center, Spinner, Tabs, Tooltip, Button, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { Star, Star2, Edit, Settings } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const Header = () => {
  const history = useHistory();
  const {
    activeObject,
    isFavorite,
    contentView,
    opportunitiesWithPersons
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject,
    isFavorite: store.objectDetailed.isFavorite,
    contentView: store.objectDetailed.contentView,
    opportunitiesWithPersons: store.objectDetailed.opportunitiesWithPersons
  }));
  const dispatch = useDispatch();

  const onContentViewChange = value => {
    if (value === 'opportunities' && activeObject.opportunities.length === 0) {
      dispatch(objectDetailedActionCreator.setModalOpportunityCreation(true));
    } else {
      dispatch(objectDetailedActionCreator.setContentView(value));
    }
  };

  return (
    <S.Container>
      <ThemeContext.Provider value={FLAT_THEME}>
        <S.FlexContainer>
          <S.FlexContainer>
            <Button
              size="medium"
              arrow="left"
              onClick={() => history.push('/')}
            >
              Назад
            </Button>
            {isFavorite
              ? (
                <Tooltip
                  style={{
                    fontSize: '13px',
                    lineHeight: '20px',
                    fontFamily: '"Ubuntu", sans-serif',
                    maxWidth: '250px'
                  }}
                  render={() => (
                    <div>
                      Теперь данный объект находится у вас в избранном
                    </div>
                  )}
                  pos="bottom center"
                >
                  <S.Button
                    size="medium"
                    onClick={() => dispatch(objectDetailedActionCreator.updateFavorite())}
                  >
                    <Star color="#F2994A" />
                  </S.Button>
                </Tooltip>
              )
              : (
                <S.Button
                  size="medium"
                  onClick={() => dispatch(objectDetailedActionCreator.updateFavorite())}
                >
                  <Star2 />
                </S.Button>
              )}
            <S.Button
              size="medium"
              onClick={() => dispatch(objectDetailedActionCreator.setModalHeaderNameEdit(true))}
            >
              <Edit />
            </S.Button>
            <S.Button
              size="medium"
              onClick={() => dispatch(objectDetailedActionCreator.setModalHeaderNotifications(true))}
            >
              <Settings />
            </S.Button>
          </S.FlexContainer>
          <S.ObjectName>
            {activeObject.name}
          </S.ObjectName>
        </S.FlexContainer>
        <S.FlexContainer
          $justify="flex-end"
        >
          <Tabs
            style={{
              margin: '0 30px 0 0'
            }}
            value={contentView}
            onValueChange={value => onContentViewChange(value)}
          >
            <Tabs.Tab
              id="object"
              style={{
                color: '#373737',
                textDecoration: 'none'
              }}
            >
              Объект
            </Tabs.Tab>
            <Tabs.Tab
              id="opportunities"
              disabled={!opportunitiesWithPersons}
              style={{
                paddingRight: '27px',
                color: '#373737',
                textDecoration: 'none'
              }}
            >
              Возможности
              {' '}
              <S.CountContainer>
                <Center>
                  {opportunitiesWithPersons
                    ? (

                      <S.Count>
                        <Center>
                          {activeObject.opportunities.length}
                        </Center>
                      </S.Count>

                    )
                    : (<Spinner type="mini" caption={null} />)}
                </Center>
              </S.CountContainer>
            </Tabs.Tab>
          </Tabs>
        </S.FlexContainer>
        <S.HeaderLine />
      </ThemeContext.Provider>
    </S.Container>
  );
};

export default Header;
