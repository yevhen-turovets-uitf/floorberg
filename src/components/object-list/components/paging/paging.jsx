import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paging as PagingUI } from '@skbkontur/react-ui';
import { objectListActionCreator } from 'src/store/actions';
import * as S from './styles';

const Paging = () => {
  const {
    pagesCount,
    activePage
  } = useSelector(store => ({
    pagesCount: store.objectList.pagesCount,
    activePage: store.objectList.activePage
  }));
  const dispatch = useDispatch();

  return (
    <S.Container
      $justify="center"
      $align="center"
    >
      <PagingUI
        activePage={activePage}
        onPageChange={page => dispatch(objectListActionCreator.setActivePage(page))}
        pagesCount={pagesCount}
        withoutNavigationHint
      />
    </S.Container>
  );
};

export default Paging;
