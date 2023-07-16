import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import { useMediaQuery } from 'react-responsive';
import {
  Header,
  MainInfo,
  Counterparties,
  OpportunitiesControl,
  OpportunitiesInfo,
  HistoryControl,
  HistoryContent,
  SidePageHistoryContent,
  HistoryControlColumn,
  ModalHeaderNameEdit,
  ModalHeaderNotifications,
  ModalMainInfoDescriptionEdit,
  ModalMainInfoLinksEdit,
  ModalMainInfoImagesEdit,
  ModalMainInfoImagePreview,
  ModalMainInfoAddressEdit,
  ModalMainInfoMapEdit,
  ModalMainInfoMapEditAcception,
  ModalPersonsAddLegalPerson,
  ModalPersonsChangeLegalRole,
  ModalPersonsAddEmployee,
  ModalPersonsMakeMeeting,
  ModalPersonsMakeCall,
  ModalOpportunityCreation,
  ModalOpportunityDataEdit,
  ModalOpportunityDescriptionEdit,
  ModalOpportunityAddRegistration,
  ModalOpportunityRemoveRegistration,
  ModalOpportunityFilesEdit,
  ModalOpportunityAddEstimate,
  ModalHistoryAddComment,
  ModalHistoryMakeCall,
  ModalHistoryAddTask
} from './components/components';
import * as S from './styles';

const ObjectDetailed = () => {
  const { pathname } = useLocation();
  const {
    objectLoading,
    contentView,
    legalPersonsWithEmployees,
    activeOpportunity,
    sidePageHistoryContent,
    modalHeaderNameEdit,
    modalHeaderNotifications,
    modalMainInfoDescriptionEdit,
    modalMainInfoLinksEdit,
    modalMainInfoImagesEdit,
    modalMainInfoImagePreview,
    modalMainInfoAddressEdit,
    modalMainInfoMapEdit,
    modalMainInfoMapEditAcception,
    modalPersonsAddLegalPerson,
    modalPersonsChangeLegalRole,
    modalPersonsAddEmployee,
    modalPersonsMakeMeeting,
    modalPersonsMakeCall,
    modalOpportunityCreation,
    modalOpportunityDataEdit,
    modalOpportunityDescriptionEdit,
    modalOpportunityAddRegistration,
    modalOpportunityRemoveRegistration,
    modalOpportunityFilesEdit,
    modalOpportunityAddEstimate,
    modalHistoryAddComment,
    modalHistoryMakeCall,
    modalHistoryAddTask
  } = useSelector(store => ({
    objectLoading: store.objectDetailed.objectLoading,
    contentView: store.objectDetailed.contentView,
    legalPersonsWithEmployees: store.objectDetailed.legalPersonsWithEmployees,
    activeOpportunity: store.objectDetailed.activeOpportunity,
    sidePageHistoryContent: store.objectDetailed.sidePageHistoryContent,
    modalHeaderNameEdit: store.objectDetailed.modalHeaderNameEdit,
    modalHeaderNotifications: store.objectDetailed.modalHeaderNotifications,
    modalMainInfoDescriptionEdit: store.objectDetailed.modalMainInfoDescriptionEdit,
    modalMainInfoLinksEdit: store.objectDetailed.modalMainInfoLinksEdit,
    modalMainInfoImagesEdit: store.objectDetailed.modalMainInfoImagesEdit,
    modalMainInfoImagePreview: store.objectDetailed.modalMainInfoImagePreview,
    modalMainInfoAddressEdit: store.objectDetailed.modalMainInfoAddressEdit,
    modalMainInfoMapEdit: store.objectDetailed.modalMainInfoMapEdit,
    modalMainInfoMapEditAcception: store.objectDetailed.modalMainInfoMapEditAcception,
    modalPersonsAddLegalPerson: store.objectDetailed.modalPersonsAddLegalPerson,
    modalPersonsChangeLegalRole: store.objectDetailed.modalPersonsChangeLegalRole,
    modalPersonsAddEmployee: store.objectDetailed.modalPersonsAddEmployee,
    modalPersonsMakeMeeting: store.objectDetailed.modalPersonsMakeMeeting,
    modalPersonsMakeCall: store.objectDetailed.modalPersonsMakeCall,
    modalOpportunityCreation: store.objectDetailed.modalOpportunityCreation,
    modalOpportunityDataEdit: store.objectDetailed.modalOpportunityDataEdit,
    modalOpportunityDescriptionEdit: store.objectDetailed.modalOpportunityDescriptionEdit,
    modalOpportunityAddRegistration: store.objectDetailed.modalOpportunityAddRegistration,
    modalOpportunityRemoveRegistration: store.objectDetailed.modalOpportunityRemoveRegistration,
    modalOpportunityFilesEdit: store.objectDetailed.modalOpportunityFilesEdit,
    modalOpportunityAddEstimate: store.objectDetailed.modalOpportunityAddEstimate,
    modalHistoryAddComment: store.objectDetailed.modalHistoryAddComment,
    modalHistoryMakeCall: store.objectDetailed.modalHistoryMakeCall,
    modalHistoryAddTask: store.objectDetailed.modalHistoryAddTask
  }));
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1280px)' });
  const [bindInfinityScroll, setBindInfinityScroll] = useState(null);

  useEffect(() => {
    dispatch(objectDetailedActionCreator.getActiveObject());

    const regexp = pathname.match(/\d{1,99}/);

    if (regexp && regexp[0]) {
      dispatch(objectDetailedActionCreator.getActiveObject(regexp[0]));
    }
  }, [dispatch, pathname]);

  if (objectLoading) {
    return <Spinner style={{ width: '100%' }} />;
  }
  return (
    <S.ViewContainer
      $isSmallScreen={isSmallScreen}
    >
      <S.MainColumn>
        <Header />
        {contentView === 'object' && (
          <>
            <MainInfo />
            <Counterparties
              legalPersons={legalPersonsWithEmployees}
            />
          </>
        )}
        {contentView === 'opportunities'
        && (
          <>
            <OpportunitiesControl />
            <OpportunitiesInfo />
            <Counterparties
              legalPersons={activeOpportunity.legalPersonsWithEmployees}
            />
          </>
        )}
      </S.MainColumn>
      <S.HistoryColumn>
        {!isSmallScreen
        && (
          <>
            <HistoryControl />
            <HistoryContent />
          </>
        )}
        {isSmallScreen
        && (
          <HistoryControlColumn />
        )}
      </S.HistoryColumn>
      {sidePageHistoryContent
      && (
        <SidePageHistoryContent
          setBindInfinityScroll={setBindInfinityScroll}
        >
          <HistoryControl />
          <HistoryContent
            bindInfinityScroll={bindInfinityScroll}
          />
        </SidePageHistoryContent>
      )}
      {modalHeaderNameEdit
      && <ModalHeaderNameEdit />}
      {modalHeaderNotifications
      && <ModalHeaderNotifications />}
      {modalMainInfoDescriptionEdit
      && <ModalMainInfoDescriptionEdit />}
      {modalMainInfoLinksEdit
      && <ModalMainInfoLinksEdit />}
      {modalMainInfoImagesEdit
      && <ModalMainInfoImagesEdit />}
      {modalMainInfoImagePreview >= 0
      && <ModalMainInfoImagePreview />}
      {modalMainInfoAddressEdit
      && <ModalMainInfoAddressEdit />}
      {modalMainInfoMapEdit
      && <ModalMainInfoMapEdit />}
      {modalMainInfoMapEditAcception
      && <ModalMainInfoMapEditAcception />}
      {modalPersonsAddLegalPerson
      && <ModalPersonsAddLegalPerson />}
      {modalPersonsChangeLegalRole
      && <ModalPersonsChangeLegalRole />}
      {modalPersonsAddEmployee
      && <ModalPersonsAddEmployee />}
      {modalPersonsMakeMeeting >= 0
      && <ModalPersonsMakeMeeting />}
      {modalPersonsMakeCall
      && <ModalPersonsMakeCall />}
      {modalOpportunityCreation
      && <ModalOpportunityCreation />}
      {modalOpportunityDataEdit
      && <ModalOpportunityDataEdit />}
      {modalOpportunityDescriptionEdit
      && <ModalOpportunityDescriptionEdit />}
      {modalOpportunityAddRegistration
      && <ModalOpportunityAddRegistration />}
      {modalOpportunityRemoveRegistration
      && <ModalOpportunityRemoveRegistration />}
      {modalOpportunityFilesEdit
      && <ModalOpportunityFilesEdit />}
      {modalOpportunityAddEstimate
      && <ModalOpportunityAddEstimate />}
      {modalHistoryAddComment
      && <ModalHistoryAddComment />}
      {modalHistoryMakeCall
      && <ModalHistoryMakeCall />}
      {modalHistoryAddTask
      && <ModalHistoryAddTask />}
    </S.ViewContainer>
  );
};

export default ObjectDetailed;
