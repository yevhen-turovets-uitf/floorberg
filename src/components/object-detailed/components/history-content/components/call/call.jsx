import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Call = ({
  audio
}) => (
  <S.Container>
    <S.Audio
      controls
      src={audio}
    >
      Ваш браузер не поддерживает элемент
      {' '}
      <code>audio</code>
      .
    </S.Audio>
  </S.Container>
);

Call.propTypes = {
  audio: PropTypes.string.isRequired
};

export default Call;
