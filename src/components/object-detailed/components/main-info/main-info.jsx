import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import {
  InfoTitle,
  InfoDescription,
  InfoLinks,
  InfoImages,
  MapTitle,
  MapView
} from './components/components';
import * as S from './styles';

const MainInfo = () => {
  const {
    activeObject
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject
  }));
  const [mapBlockHeight, setMapBlockHeight] = useState(0);

  const main = useRef();
  const mapTitle = useRef();

  const resizeYMap = () => {
    setMapBlockHeight(main.current.offsetHeight - mapTitle.current.offsetHeight - 48);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeYMap);

    resizeYMap();

    return () => window.removeEventListener('resize', resizeYMap);
  }, []);

  useEffect(() => {
    resizeYMap();
  }, [activeObject]);

  return (
    <S.Container>
      <ThemeContext.Provider value={FLAT_THEME}>
        <S.InfoBlock>
          <InfoTitle />
          <S.InfoContent ref={main}>
            <InfoDescription />
            <S.InfoSeparator />
            <InfoLinks />
            <S.InfoSeparator />
            <InfoImages
              resizeYMap={resizeYMap}
            />
          </S.InfoContent>
        </S.InfoBlock>
        <S.InfoBlock>
          <MapTitle />
          <MapView
            mapTitle={mapTitle}
            mapBlockHeight={mapBlockHeight}
          />
        </S.InfoBlock>
      </ThemeContext.Provider>
    </S.Container>
  );
};

export default MainInfo;
