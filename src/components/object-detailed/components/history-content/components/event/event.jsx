import React from 'react';
import PropTypes from 'prop-types';
import { Hint } from '@skbkontur/react-ui';
import { User } from '@skbkontur/react-icons';
import * as S from './styles';

const Event = ({
  children,
  iconPath,
  addTime,
  title,
  personName,
  avatarPath
}) => (
  <S.Container
    $justify="space-between"
    $align="flex-start"
  >
    <S.Icon
      $iconPath={iconPath}
    />
    <S.Content>
      <S.ContentHeader
        $justify="space-between"
        $align="center"
      >
        <S.TitleWithDate>
          <S.Date>
            {addTime}
          </S.Date>
          <S.Title>
            {title}
          </S.Title>
        </S.TitleWithDate>
        <Hint
          pos="bottom right"
          maxWidth="250px"
          text={personName}
          style={{
            lineHeight: '20px',
            fontFamily: '"Ubuntu", sans-serif'
          }}
        >
          <S.AvatarContainer>
            {avatarPath
              ? (
                <S.Avatar
                  src={avatarPath}
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
      </S.ContentHeader>
      {children}
    </S.Content>
  </S.Container>
);

Event.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  iconPath: PropTypes.string.isRequired,
  addTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  avatarPath: PropTypes.string.isRequired
};

export default Event;
