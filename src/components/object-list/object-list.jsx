import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Spinner } from '@skbkontur/react-ui';
import { animateScroll as scroll } from 'react-scroll';
import { objectListActionCreator } from 'src/store/actions';
import {
  FiltersMenu,
  Header,
  ContentTable,
  ContentCards,
  Paging,
  ModalObjectCreation
} from './components/components';
import * as S from './styles';

const ObjectList = () => {
  const history = useHistory();
  const {
    modalObjectCreation,
    userList,
    objectListViewStyle,
    pagesCount,
    activePage,
    filters,
    activeFilters,
    newObjectId
  } = useSelector(store => ({
    modalObjectCreation: store.objectList.modalObjectCreation,
    userList: store.objectList.userList,
    objectListViewStyle: store.objectList.objectListViewStyle,
    pagesCount: store.objectList.pagesCount,
    activePage: store.objectList.activePage,
    filters: store.objectList.filters,
    activeFilters: store.objectList.activeFilters,
    newObjectId: store.objectList.newObjectId
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(objectListActionCreator.setModalObjectCreation());
  }, [dispatch]);

  useEffect(() => {
    dispatch(objectListActionCreator.getObjectListWithFilters());
    scroll.scrollToTop();
  }, [activeFilters, activePage, dispatch]);

  useEffect((() => {
    if (newObjectId) {
      history.push(`/${newObjectId}`);
      dispatch(objectListActionCreator.setNewObjectId());
    }
  }), [newObjectId, history, dispatch]);

  if (!(filters && userList)) {
    return <Spinner style={{ width: '100%' }} />;
  }
  return (
    <S.ViewContainer
      $align="flex-start"
    >
      <S.FiltersColumn>
        <FiltersMenu />
      </S.FiltersColumn>
      <S.ContentColumn>
        <Header />
        {objectListViewStyle === 'table'
          && (
            <ContentTable />
          )}
        {objectListViewStyle === 'cards'
          && (
            <ContentCards />
          )}
        {pagesCount > 1 && (
          <Paging />
        )}
      </S.ContentColumn>
      {modalObjectCreation
      && <ModalObjectCreation />}
    </S.ViewContainer>
  );
};

export default ObjectList;
