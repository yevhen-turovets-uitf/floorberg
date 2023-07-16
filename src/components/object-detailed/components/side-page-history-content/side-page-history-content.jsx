import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { SidePage, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const SidePageHistoryContent = ({
  children,
  setBindInfinityScroll
}) => {
  const dispatch = useDispatch();

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <SidePage
        onClose={() => dispatch(objectDetailedActionCreator.setSidePageHistoryContent())}
        blockBackground
      >
        <SidePage.Body
          style={{
            background: '#F7F6F6'
          }}
        >
          <S.ButtonsContainer>
            {children[0]}
          </S.ButtonsContainer>
          <S.ContentContainer
            ref={ref => setBindInfinityScroll(ref)}
          >
            {children[1]}
          </S.ContentContainer>
        </SidePage.Body>
      </SidePage>
    </ThemeContext.Provider>
  );
};

SidePageHistoryContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  setBindInfinityScroll: PropTypes.func.isRequired
};

export default SidePageHistoryContent;
