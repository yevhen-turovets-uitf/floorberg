import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Comment = ({
  comment
}) => (
  <S.Container>
    {comment}
  </S.Container>
);

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Comment;
