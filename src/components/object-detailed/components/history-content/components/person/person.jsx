import React from 'react';
import PropTypes from 'prop-types';
import { User } from '@skbkontur/react-icons';
import * as S from './styles';

const Person = ({
  photo,
  name,
  position
}) => (
  <S.Container
    $align="center"
  >
    <S.AvatarContainer>
      {photo
        ? (
          <S.Avatar
            src={photo}
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
    <div>
      <S.Name>
        {name}
      </S.Name>
      <S.Position>
        {position}
      </S.Position>
    </div>
  </S.Container>
);

Person.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default Person;
