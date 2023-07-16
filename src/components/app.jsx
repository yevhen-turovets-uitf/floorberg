import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from '@skbkontur/react-ui';
import ObjectList from 'src/components/object-list/object-list';
import ObjectDetailed from 'src/components/object-detailed/object-detailed';
import { objectListActionCreator, objectDetailedActionCreator } from 'src/store/actions';

const App = () => {
  const {
    objectListLoading
  } = useSelector(store => ({
    objectListLoading: store.objectList.objectListLoading
  }));
  const dispatch = useDispatch();
  // need to delete (|| 560) in prod
  const currentUser = window?.user?.id || 560;

  useEffect(() => {
    dispatch(objectListActionCreator.getUserData(currentUser));
  }, [dispatch, currentUser]);

  useEffect(() => {
    dispatch(objectListActionCreator.getUsersList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(objectListActionCreator.getPartnersList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(objectDetailedActionCreator.getOpportunitiesDirections());
  }, [dispatch]);

  useEffect(() => {
    dispatch(objectDetailedActionCreator.getLegalPersonPossibleRoles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(objectDetailedActionCreator.getMaterialProviders());
  }, [dispatch]);

  if (objectListLoading) {
    return <Spinner style={{ width: '100%' }} />;
  }
  return (
    <Switch>
      <Route exact path="/" component={ObjectList} />
      <Route path="/:id" component={ObjectDetailed} />
    </Switch>
  );
};

export default App;
