import React from 'react';
import PropTypes from 'prop-types';
import { Center } from '@skbkontur/react-ui';
import * as S from './styles';

const Separator = ({
  text
}) => (
  <S.Container
    $text={text}
  >
    <S.Text
      $text={text}
    >
      <Center>
        {text}
      </Center>
    </S.Text>
  </S.Container>
);

Separator.propTypes = {
  text: PropTypes.string
};

Separator.defaultProps = {
  text: 'запланировано'
};

export default Separator;
