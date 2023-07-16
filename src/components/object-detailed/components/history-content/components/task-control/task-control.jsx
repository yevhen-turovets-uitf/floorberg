import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';
import {
  Checkbox,
  DatePicker,
  Tooltip,
  Input,
  Textarea,
  DropdownMenu,
  MenuItem,
  MenuSeparator,
  Center
} from '@skbkontur/react-ui';
import { Edit, Calendar, YandexZen2, Picture, Loading, Clear, Add, Clock } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const TaskControl = ({
  task,
  approximateStatus
}) => {
  const dispatch = useDispatch();
  const [orientedDate, setOrientedDate] = useState('');
  const [orientedTime, setOrientedTime] = useState('');
  const [fullDate, setFullDate] = useState();
  const [taskStatus, setTaskStatus] = useState(false);
  const [taskEdit, setTaskEdit] = useState(false);
  const [taskText, setTaskText] = useState(task.text || '');
  const [isValidTime, setValidTime] = useState(true);
  const tooltip = useRef();

  const [, cancel] = useDebounce(
    () => {
      if (Date.parse(fullDate) >= 0) {
        dispatch(objectDetailedActionCreator.updateTask(
          task.id,
          {
            ext_time: fullDate
          }
        ));
      }
    },
    500,
    [fullDate]
  );

  useEffect(() => () => cancel(), [cancel]);

  useEffect(() => {
    setOrientedDate(
      task.ext_time !== '-000001-11-30T00:00:00.000000Z'
        ? task.ext_time.split('T')[0].split('-').reverse().join('.')
        : ''
    );
    setOrientedTime(
      task.ext_time !== '-000001-11-30T00:00:00.000000Z'
        ? `${task.ext_time.split('T')[1].split(':')[0]}:${task.ext_time.split('T')[1].split(':')[1]}`
        : ''
    );
  }, [task]);

  useEffect(() => {
    if (taskStatus) {
      const timeout = setTimeout(() => {
        dispatch(objectDetailedActionCreator.completeTask(task.id));
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
    return null;
  }, [dispatch, task.id, taskStatus]);

  const validateTime = () => {
    const isValid = !orientedTime
      || !!Date.parse(`${orientedDate.split('.').reverse().join('-')}T${orientedTime}:00.000Z`);

    setValidTime(isValid);
  };

  const handleCloseTooltip = () => {
    tooltip.current.close();
  };

  const addDays = count => {
    const currentDate = new Date();
    const newDateWithTimezone = new Date(
      Date.now() + count * 24 * 3600 * 1000 + currentDate.getTimezoneOffset() * 60 * 1000
    ).toISOString();
    setFullDate(`${newDateWithTimezone.split('T')[0]}T00:00:00.000Z`);
  };

  const updateDate = date => {
    if (DatePicker.validate(date)) {
      const dateString = date.split('.').reverse().join('-');

      if (dateString && orientedTime) {
        setFullDate(`${dateString}T${orientedTime}:00.000Z`);
      }
      if (dateString && !orientedTime) {
        setFullDate(`${dateString}T00:00:00.000Z`);
      }
    }
  };

  return (
    <S.Container
      $justify="space-between"
    >
      {taskEdit
        ? (
          <Textarea
            width="calc(100% - 50px)"
            rows={1}
            error={taskText.length < 10}
            autoResize
            value={taskText}
            autoFocus
            selectAllOnFocus
            onValueChange={setTaskText}
            onBlur={() => {
              dispatch(objectDetailedActionCreator.updateTask(
                task.id,
                {
                  text: taskText
                }
              ));
              setTaskEdit(false);
            }}
          />
        )
        : (
          <Checkbox
            style={{
              maxWidth: 'calc(100% - 45px)',
              whiteSpace: 'pre-wrap'
            }}
            checked={taskStatus}
            error={approximateStatus}
            onValueChange={() => setTaskStatus(true)}
          >
            {task.text}
          </Checkbox>
        )}
      <S.ButtonsContainer>
        <Edit
          style={{
            cursor: 'pointer',
            margin: '0 5px 0 0'
          }}
          onClick={() => setTaskEdit(true)}
        />
        <DropdownMenu
          caption={(
            <Calendar
              style={{
                cursor: 'pointer'
              }}
            />
          )}
          positions={[
            'bottom right',
            'top right',
            'bottom left',
            'bottom center',
            'top center',
            'top left'
          ]}
        >
          <MenuItem
            onClick={() => addDays(1)}
          >
            <YandexZen2 />
            {' '}
            Сегодня
          </MenuItem>
          <MenuItem
            onClick={() => addDays(2)}
          >
            <Picture />
            {' '}
            Завтра
          </MenuItem>
          <MenuItem
            onClick={() => addDays(7)}
          >
            <Loading />
            {' '}
            Через неделю
          </MenuItem>
          <MenuItem
            onClick={() => setFullDate('1970-01-01T00:00:00.000Z')}
          >
            <Clear />
            {' '}
            Без срока
          </MenuItem>
          <MenuSeparator />
          <DatePicker
            menuAlign="right"
            style={{
              minWidth: '130px',
              margin: '5px 15px'
            }}
            value={orientedDate}
            onValueChange={value => {
              if (DatePicker.validate(value)) {
                setOrientedDate(value);
                updateDate(value);
              }
            }}
          />
          <MenuSeparator />
          {`${task.ext_time.split('T')[1].split(':')[0]}:${task.ext_time.split('T')[1].split(':')[1]}` === '00:00'
            ? (
              <Tooltip
                ref={tooltip}
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: '"Ubuntu", sans-serif',
                  width: '225px'
                }}
                trigger="click"
                closeButton={false}
                render={() => (
                  <>
                    <S.TooltipContent
                      $justify="space-between"
                      $align="center"
                    >
                      <div>
                        Время:
                      </div>
                      <Input
                        style={{
                          width: '85px'
                        }}
                        error={!isValidTime}
                        disabled={orientedDate.length !== 10}
                        rightIcon={<Clock color="#333333" />}
                        value={orientedTime}
                        mask="29:59"
                        formatChars={{
                          2: '[0-2]',
                          5: '[0-5]',
                          9: '[0-9]'
                        }}
                        placeholder="09:00"
                        onFocus={() => setValidTime(true)}
                        onBlur={validateTime}
                        onValueChange={setOrientedTime}
                      />
                    </S.TooltipContent>
                    <S.TooltipContent
                      $justify="space-between"
                      $align="center"
                    >
                      <S.Button
                        disabled={!Date.parse(`${orientedDate.split('.').reverse().join('-')}T${orientedTime}:00.000Z`)}
                        onClick={() => {
                          updateDate(orientedDate);
                          handleCloseTooltip();
                        }}
                      >
                        Добавить
                      </S.Button>
                      <S.Button
                        onClick={() => {
                          setOrientedTime('');
                          handleCloseTooltip();
                        }}
                      >
                        Отменить
                      </S.Button>
                    </S.TooltipContent>
                  </>
                )}
                pos="bottom center"
              >
                <S.AddTime>
                  <Add />
                  {' '}
                  Добавить время
                </S.AddTime>
              </Tooltip>
            )
            : (
              <Center>
                <S.Time>
                  {orientedTime}
                  {' '}
                  <Clear
                    style={{
                      cursor: 'pointer'
                    }}
                    onClick={() => setFullDate(`${orientedDate.split('.').reverse().join('-')}T00:00:00.000Z`)}
                  />
                </S.Time>
              </Center>
            )}
        </DropdownMenu>
      </S.ButtonsContainer>
    </S.Container>
  );
};

TaskControl.propTypes = {
  task: PropTypes.objectOf(PropTypes.any).isRequired,
  approximateStatus: PropTypes.bool.isRequired
};

export default TaskControl;
