import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Tooltip, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { CommentSolid, Phone2, Calendar, Handshake } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const HistoryControl = () => {
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
      text: 'Комментарий',
      click: () => dispatch(objectDetailedActionCreator.setModalHistoryAddComment(true))
    },
    {
      tooltipText: 'Совершить звонок связанным сотрудникам и контрагентам',
      icon: <Phone2 />,
      text: 'Звонок',
      click: () => dispatch(objectDetailedActionCreator.setModalHistoryMakeCall(true))
    },
    {
      tooltipText: 'Создайте запланированную или не имеющую сроков задачу',
      icon: <Calendar />,
      text: 'Задача',
      click: () => dispatch(objectDetailedActionCreator.setModalHistoryAddTask(true))
    },
    {
      tooltipText: 'Сохраните в истории событий информацию о встрече',
      icon: <Handshake />,
      text: 'Встреча',
      click: () => dispatch(objectDetailedActionCreator.setModalPersonsMakeMeeting(0))
    }
  ];

  return (
    <S.Container>
      <ThemeContext.Provider value={FLAT_THEME}>
        {buttons.map(button => (
          <Tooltip
            key={button.text}
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
            pos="bottom center"
          >
            <Button
              disabled={!(legalPersonsWithEmployees && opportunitiesWithPersons)}
              size="medium"
              style={{
                margin: '0 10px 10px 0'
              }}
              onClick={button.click}
            >
              {button.icon}
              {' '}
              {button.text}
            </Button>
          </Tooltip>
        ))}
      </ThemeContext.Provider>
    </S.Container>
  );
};

export default HistoryControl;
