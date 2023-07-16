import React from 'react';
import PropTypes from 'prop-types';
import { Ok } from '@skbkontur/react-icons';
import * as S from './styles';

const Opportunity = ({
  title,
  chance,
  state
}) => {
  switch (state) {
    case '2' || 2:
      return (
        <S.Container>
          <S.Title $closed>
            <S.Dot $red />
            {title}
          </S.Title>
        </S.Container>
      );
    case '1' || 1:
      return (
        <S.Container>
          <S.Title>
            <Ok
              style={{
                margin: '0 4px 0 0'
              }}
              color="rgb(68, 198, 128)"
            />
            {title}
          </S.Title>
        </S.Container>
      );
    default:
      return (
        <S.Container>
          <S.Title>
            <S.Dot
              $percent={+chance}
            />
            {title}
          </S.Title>
        </S.Container>
      );
  }
};

Opportunity.propTypes = {
  title: PropTypes.string.isRequired,
  chance: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

export default Opportunity;
