import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { YMaps, TypeSelector, ZoomControl, Map, GeoObject } from 'react-yandex-maps';
import { Center } from '@skbkontur/react-ui';
import * as S from './styles';

const MapView = ({
  mapTitle,
  mapBlockHeight
}) => {
  const {
    activeObject
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject
  }));
  const [ymaps, setYmaps] = useState(null);

  const setCenter = ref => {
    if (ymaps) {
      const map = ref.getMap();
      const result = ymaps.util.bounds.getCenterAndZoom(
        ref.geometry.getBounds(),
        map.container.getSize()
      );
      map.setCenter(result.center, (result.zoom > 17 ? 17 : result.zoom));
    }
  };

  return (
    <S.Container>
      <S.InfoDescription ref={mapTitle}>
        {activeObject.address}
      </S.InfoDescription>
      {activeObject.points.length > 0
        ? (
          <div style={{
            height: `${mapBlockHeight > 250 ? mapBlockHeight : 250}px`,
            background: '#e5e5e5'
          }}
          >
            <YMaps
              query={{
                lang: 'ru_RU',
                load: 'util.bounds'
              }}
            >
              <Map
                defaultState={{
                  type: 'yandex#hybrid',
                  center: [60.0462, 129.8561],
                  zoom: 4
                }}
                width="100%"
                height={`${mapBlockHeight > 250 ? mapBlockHeight : 250}px`}
                onLoad={setYmaps}
              >
                <TypeSelector />
                <ZoomControl />
                {activeObject.points.length === 1
                && (
                  <GeoObject
                    instanceRef={ref => ref && setCenter(ref)}
                    geometry={{
                      type: 'Point',
                      coordinates: activeObject.points[0].position.split(',')
                    }}
                    options={{
                      draggable: true,
                      preset: 'islands#darkGreenCircleIcon',
                      color: '#37a87a'
                    }}
                  />
                )}
                {activeObject.points.length > 1
                && (
                  <GeoObject
                    instanceRef={ref => ref && setCenter(ref)}
                    geometry={{
                      type: 'Polygon',
                      coordinates: [activeObject.points.map(point => point.position.split(','))],
                      fillRule: 'nonZero'
                    }}
                    options={{
                      fillColor: '#37a87a33',
                      strokeColor: '#37a87aFF',
                      strokeWidth: 3,
                      strokeStyle: 'solid'
                    }}
                  />
                )}
              </Map>
            </YMaps>
          </div>
        ) : (
          <Center
            style={{
              height: `${mapBlockHeight > 250 ? mapBlockHeight : 250}px`,
              textAlign: 'center'
            }}
          >
            <S.InfoCenteredText>
              Местоположение
              <br />
              не определено
            </S.InfoCenteredText>
          </Center>
        )}
    </S.Container>
  );
};

MapView.propTypes = {
  mapTitle: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  mapBlockHeight: PropTypes.number.isRequired
};

export default MapView;
