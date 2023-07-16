import React from 'react';
import {
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import {
  OpportunityTitle,
  OpportunityMain,
  OpportunityDescription,
  OpportunityRegistrations,
  OpportunityFiles,
  EstimatesTitle,
  EstimatesMain
} from './components/components';
import * as S from './styles';

const OpportunitiesInfo = () => (
  <S.Container>
    <ThemeContext.Provider value={FLAT_THEME}>
      <S.InfoBlock>
        <OpportunityTitle />
        <S.InfoContent>
          <OpportunityMain />
          <S.InfoSeparator />
          <OpportunityDescription />
          <S.InfoSeparator />
          <OpportunityRegistrations />
          <S.InfoSeparator />
          <OpportunityFiles />
        </S.InfoContent>
      </S.InfoBlock>
      <S.InfoBlock>
        <EstimatesTitle />
        <EstimatesMain />
      </S.InfoBlock>
    </ThemeContext.Provider>
  </S.Container>
);

export default OpportunitiesInfo;
