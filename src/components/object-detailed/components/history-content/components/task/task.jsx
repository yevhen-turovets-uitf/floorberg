import React from 'react';
import PropTypes from 'prop-types';
import { Hint, Center } from '@skbkontur/react-ui';
import { Calendar, User } from '@skbkontur/react-icons';
import * as S from './styles';

const Task = ({
  children,
  approximateTime,
  approximateStatus,
  from,
  to
}) => (
  <S.Container
    $justify="space-between"
  >
    <S.Icon>
      <Center>
        <Calendar
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
      </Center>
    </S.Icon>
    <S.Content
      $approximateStatus={approximateStatus}
    >
      <S.ContentHeader
        $justify="space-between"
        $align="center"
      >
        <S.TitleWithDate>
          <S.Date
            $approximateStatus={approximateStatus}
          >
            {approximateTime}
          </S.Date>
          <S.Title>
            Запланирована задача
          </S.Title>
        </S.TitleWithDate>
        <S.AvatarsWrapper>
          <Hint
            pos="bottom right"
            maxWidth="250px"
            text={(
              <S.HintContainer
                $direction="column"
                $align="flex-end"
              >
                {to.id !== from.id
                && (
                  <S.Status>
                    Исполнитель
                  </S.Status>
                )}
                <div>
                  {to.person.surname}
                  {' '}
                  {to.person.name}
                  {' '}
                  {to.person.patronymic}
                </div>
              </S.HintContainer>
            )}
            style={{
              lineHeight: '20px',
              fontFamily: '"Ubuntu", sans-serif'
            }}
          >
            <S.AvatarContainer>
              {to.person.image
                ? (
                  <S.Avatar
                    src={to.person.image}
                    alt=" "
                  />
                )
                : (
                  <User
                    style={{
                      margin: '5px'
                    }}
                    color="#B7B7B7"
                  />
                )}
            </S.AvatarContainer>
          </Hint>
          {to.id !== from.id
          && (
            <Hint
              pos="bottom right"
              maxWidth="250px"
              text={(
                <S.HintContainer
                  $direction="column"
                  $align="flex-end"
                >
                  <S.Status>
                    Постановщик
                  </S.Status>
                  <div>
                    {from.person.surname}
                    {' '}
                    {from.person.name}
                    {' '}
                    {from.person.patronymic}
                  </div>
                </S.HintContainer>
              )}
              style={{
                lineHeight: '20px',
                fontFamily: '"Ubuntu", sans-serif'
              }}
            >
              <S.AvatarContainer>
                {from.person.image
                  ? (
                    <S.Avatar
                      src={from.person.image}
                      alt=" "
                    />
                  )
                  : (
                    <User
                      style={{
                        margin: '5px'
                      }}
                      color="#B7B7B7"
                    />
                  )}
              </S.AvatarContainer>
            </Hint>
          )}
        </S.AvatarsWrapper>
      </S.ContentHeader>
      {children}
    </S.Content>
  </S.Container>
);

Task.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  approximateTime: PropTypes.string,
  approximateStatus: PropTypes.bool.isRequired,
  from: PropTypes.objectOf(PropTypes.any).isRequired,
  to: PropTypes.objectOf(PropTypes.any).isRequired
};

Task.defaultProps = {
  approximateTime: 'без срока'
};

export default Task;
