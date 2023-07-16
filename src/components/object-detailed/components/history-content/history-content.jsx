/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import InfiniteScroll from 'react-infinite-scroller';
import { Spinner, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import { selectMonth } from 'src/helpers/date-helper';
import {
  Event,
  Opportunity,
  Comment,
  Person,
  Call,
  Task,
  TaskControl,
  EmptyTask,
  Separator
} from './components/components';
import * as S from './styles';

const HistoryContent = ({
  bindInfinityScroll
}) => {
  const {
    eventsPages,
    loadingEventsPages,
    taskList,
    user
  } = useSelector(store => ({
    eventsPages: store.objectDetailed.eventsPages,
    loadingEventsPages: store.objectDetailed.loadingEventsPages,
    taskList: store.objectDetailed.taskList,
    user: store.objectList.user
  }));
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1280px)' });
  const [eventsPagesFormated, setEventsPagesFormated] = useState([]);
  const [taskListFormated, setTaskListFormated] = useState([]);

  useEffect(() => {
    if (eventsPages) {
      const getDay = (addTime, dateArray) => {
        const addDate = new Date(addTime);
        const currentDate = new Date(Date.now());

        if (currentDate.getDate() - addDate.getDate() === 0
          && dateArray[0] === currentDate.toISOString().split('T')[0].split('-')[0]
          && dateArray[1] === currentDate.toISOString().split('T')[0].split('-')[1]) {
          return 'сегодня';
        }
        if (currentDate.getDate() - addDate.getDate() === 1
          && dateArray[0] === currentDate.toISOString().split('T')[0].split('-')[0]
          && dateArray[1] === currentDate.toISOString().split('T')[0].split('-')[1]) {
          return 'вчера';
        }
        return currentDate.getFullYear() !== +dateArray[0]
          ? `${dateArray[2]} ${selectMonth(dateArray[1])} ${dateArray[0]}`
          : `${dateArray[2]} ${selectMonth(dateArray[1])}`;
      };

      const events = eventsPages.data.reduce((prev, curr, index) => {
        const dateArray = curr.add_time.split('T')[0].split('-');

        if (index === 0 || curr.add_time.split('T')[0] !== prev[prev.length - 1].add_time.split('T')[0]) {
          return [
            ...prev,
            {
              ...curr,
              addTimeText: getDay(curr.add_time, dateArray)
            }
          ];
        }
        return [
          ...prev,
          curr
        ];
      }, []);

      setEventsPagesFormated(events);
    }
  }, [eventsPages]);

  useEffect(() => {
    if (taskList) {
      setTaskListFormated(
        taskList.filter(
          task => task.end_time === '-000001-11-30T00:00:00.000000Z'
        ).reverse()
      );
    }
  }, [taskList]);

  const getTime = date => {
    const timeArray = date.split('T')[1].split(':');

    return `${timeArray[0]}:${timeArray[1]}`;
  };

  const getApproximateTime = date => {
    const dateArray = date.split('T')[0].split('-');
    const currentDate = new Date(Date.now());

    if (date === '-000001-11-30T00:00:00.000000Z') {
      return 'без срока';
    }
    return currentDate.getFullYear() !== +dateArray[0]
      ? `до ${dateArray[2]} ${selectMonth(dateArray[1])} ${dateArray[0]}`
      : `до ${dateArray[2]} ${selectMonth(dateArray[1])}`;
  };

  const getTaskStatus = date => {
    const dayTime = Date.parse(date) - Date.now();

    if (dayTime >= 0 || date === '-000001-11-30T00:00:00.000000Z') {
      return false;
    }
    return true;
  };

  if (loadingEventsPages) {
    return <Spinner style={{ width: '100%' }} />;
  }
  return (
    <S.Container>
      <ThemeContext.Provider value={FLAT_THEME}>
        <Separator />
        {taskListFormated.length > 0
          ? taskListFormated.map(task => (
            <Task
              key={task.id}
              approximateTime={getApproximateTime(task.ext_time)}
              approximateStatus={getTaskStatus(task.ext_time)}
              from={task.from}
              to={task.to}
            >
              {task.opportunities.length > 0
                && (
                  <S.DataBlock>
                    {task.opportunities.map(opportunity => (
                      <Opportunity
                        key={opportunity.id}
                        title={opportunity.title}
                        chance={opportunity.chance || 0}
                        state={opportunity.state || 0}
                      />
                    ))}
                  </S.DataBlock>
                )}
              <S.DataBlock>
                {user.id === task.to.id
                  ? (
                    <TaskControl
                      task={task}
                      approximateStatus={getTaskStatus(task.ext_time)}
                    />
                  )
                  : (
                    <S.NotControledTask>
                      {task.text}
                    </S.NotControledTask>
                  )}
              </S.DataBlock>
            </Task>
          ))
          : <EmptyTask />}
        {eventsPages
        && (
          <InfiniteScroll
            useWindow={!isSmallScreen}
            getScrollParent={
              isSmallScreen
                ? (() => bindInfinityScroll)
                : undefined
            }
            pageStart={1}
            initialLoad={false}
            loadMore={page => dispatch(objectDetailedActionCreator.getEventsMorePages(page))}
            hasMore={!(eventsPages.current_page === eventsPages.last_page)}
            loader={(
              <Spinner
                key={0}
                style={{ width: '100%' }}
                type="normal"
                caption={null}
              />
            )}
          >
            {eventsPagesFormated.map(event => (
              <Fragment key={event.id}>
                {event.addTimeText
                && (
                  <Separator
                    text={event.addTimeText}
                  />
                )}
                <Event
                  iconPath={event?.type?.icon || ''}
                  addTime={getTime(event.add_time)}
                  title={event?.type?.comment || ''}
                  personName={
                    event?.owner?.person
                      ? `
                        ${event.owner.person.surname} 
                        ${event.owner.person.name} 
                        ${event.owner.person.patronymic}
                      `
                      : ''
                  }
                  avatarPath={event?.owner?.person?.image || ''}
                >
                  {event?.persons?.length > 0
                  && (
                    <S.DataBlock>
                      {event.persons.map(person => (
                        <Person
                          key={person.id}
                          photo={person.photo}
                          name={`${person.surname} ${person.name} ${person.patronymic}`}
                          position={person.first_staff.title}
                        />
                      ))}
                    </S.DataBlock>
                  )}
                  {event?.calls?.length > 0
                  && (
                    <S.DataBlock>
                      {event.calls.map(call => (
                        <Call
                          key={call.id}
                          audio={call.audio}
                        />
                      ))}
                    </S.DataBlock>
                  )}
                  {event?.opportunities?.length > 0
                  && (
                    <S.DataBlock>
                      {event.opportunities.map(opportunity => (
                        <Opportunity
                          key={opportunity.id}
                          title={opportunity.title}
                          chance={opportunity.chance}
                          state={opportunity.state}
                        />
                      ))}
                    </S.DataBlock>
                  )}
                  {event.comment
                  && (
                    <S.DataBlock>
                      <Comment
                        comment={event.comment}
                      />
                    </S.DataBlock>
                  )}
                </Event>
              </Fragment>
            ))}
          </InfiniteScroll>
        )}
      </ThemeContext.Provider>
    </S.Container>
  );
};

HistoryContent.propTypes = {
  bindInfinityScroll: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

HistoryContent.defaultProps = {
  bindInfinityScroll: null
};

export default HistoryContent;
