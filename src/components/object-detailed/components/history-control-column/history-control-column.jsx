import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Tooltip, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { CommentSolid, Phone2, Calendar, Handshake } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const HistoryControlColumn = () => {
  const {
    legalPersonsWithEmployees,
    opportunitiesWithPersons
  } = useSelector(store => ({
    legalPersonsWithEmployees: store.objectDetailed.legalPersonsWithEmployees,
    opportunitiesWithPersons: store.objectDetailed.opportunitiesWithPersons
  }));
  const dispatch = useDispatch();
  const buttons = [
    {
      tooltipText: 'Добавьте в историю событий текстовый комментарий',
      icon: <CommentSolid />,
      click: () => dispatch(objectDetailedActionCreator.setModalHistoryAddComment(true))
    },
    {
      tooltipText: 'Совершить звонок связанным сотрудникам и контрагентам',
      icon: <Phone2 />,
      click: () => dispatch(objectDetailedActionCreator.setModalHistoryMakeCall(true))
    },
    {
      tooltipText: 'Создайте запланированную или не имеющую сроков задачу',
      icon: <Calendar />,
      click: () => dispatch(objectDetailedActionCreator.setModalHistoryAddTask(true))
    },
    {
      tooltipText: 'Сохраните в истории событий информацию о встрече',
      icon: <Handshake />,
      click: () => dispatch(objectDetailedActionCreator.setModalPersonsMakeMeeting(0))
    }
  ];

  return (
    <S.Container
      $direction="column"
    >
      <S.SidebarButton
        onClick={() => dispatch(objectDetailedActionCreator.setSidePageHistoryContent(true))}
      >
        <S.NewWindow />
      </S.SidebarButton>
      <ThemeContext.Provider value={FLAT_THEME}>
        <S.ButtonsContainer
          $direction="column"
        >
          {buttons.map(button => (
            <Tooltip
              key={button.tooltipText}
              style={{
                fontSize: '13px',
                lineHeight: '20px',
                fontFamily: '"Ubuntu", sans-serif',
                maxWidth: '400px'
              }}
              render={() => (
                <S.TooltipContent>
                  {button.tooltipText}
                </S.TooltipContent>
              )}
              pos="top center"
            >
              <Button
                disabled={!(legalPersonsWithEmployees && opportunitiesWithPersons)}
                size="medium"
                style={{
                  margin: '0 0 10px 0'
                }}
                onClick={button.click}
              >
                {button.icon}
              </Button>
            </Tooltip>
          ))}
        </S.ButtonsContainer>
      </ThemeContext.Provider>
    </S.Container>
  );
};

export default HistoryControlColumn;
