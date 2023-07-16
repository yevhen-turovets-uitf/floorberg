import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { YMaps, TypeSelector, ZoomControl, Map, GeoObject, FullscreenControl } from 'react-yandex-maps';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalMainInfoMapEdit = () => {
  const {
    activeObject,
    addressFromMap
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject,
    addressFromMap: store.objectDetailed.addressFromMap
  }));
  const dispatch = useDispatch();
  const [ymaps, setYmaps] = useState(null);
  const [points, setPoints] = useState(activeObject.points || []);
  const [needCenter, setNeedCenter] = useState(activeObject.points.length > 0);
  const [requestAddress, setRequestAddress] = useState('');
  const [fias, setFias] = useState('');
  const [fullAddress, setFullAddress] = useState('');

  const handleSubmit = () => {
    if (!(points.length === 2 || points.length === 0)) {
      dispatch(objectDetailedActionCreator.updateObjectData({ object: { points } }));
    }
    if (
      fullAddress
       && fias
       && requestAddress
       && (requestAddress !== activeObject.address ?? fias !== activeObject.fiasGUID)
    ) {
      dispatch(objectDetailedActionCreator.setModalMainInfoMapEditAcception({
        address: requestAddress,
        fiasGUID: fias,
        fullAddress
      }));
    }
    dispatch(objectDetailedActionCreator.setModalMainInfoMapEdit());
  };

  const setCenter = ref => {
    if (needCenter && ymaps) {
      setNeedCenter(false);
      const map = ref.getMap();
      const result = ymaps.util.bounds.getCenterAndZoom(
        ref.geometry.getBounds(),
        map.container.getSize()
      );
      map.setCenter(result.center, (result.zoom > 17 ? 17 : result.zoom));
    }
  };

  const onAddPoint = coords => {
    setPoints([...points, { id: 0, position: coords.join(',') }]);
  };

  const onMovePoint = (index, coords) => {
    setPoints(points.map((item, itemIndex) => (index === itemIndex ? { ...item, position: coords.join(',') } : item)));
  };

  const onDeletePoint = index => {
    setPoints(points.filter((item, itemIndex) => index !== itemIndex));
  };

  useEffect(() => {
    if (addressFromMap && Object.keys(addressFromMap).length) {
      const { data } = addressFromMap;
      const location = [];

      if (data.street) {
        location.push(`${data.street_type}. ${data.street}`);
      }
      if (data.house) {
        location.push(`${data.house_type}. ${data.house}`);
      }
      if (data.flat) {
        location.push(`${data.flat_type}. ${data.flat}`);
      }
      setFullAddress(addressFromMap.value);
      setRequestAddress(location.join(', '));
      setFias(
        data.city_fias_id
          || data.settlement_fias_id
          || data.area_fias_id
          || data.region_fias_id
          || ''
      );
    }
  }, [addressFromMap]);

  useEffect(() => {
    if (points.length === 1) {
      dispatch(objectDetailedActionCreator.getAddressFromMap(points[0].position.split(',')));
    }
    if (points.length > 1) {
      const centerOfPoints = () => points.map(item => item.position.split(','))
        .reduce((c, position) => ([+c[0] + +position[0], +c[1] + +position[1]]), [0, 0])
        .map(elem => elem / points.length);

      dispatch(objectDetailedActionCreator.getAddressFromMap(centerOfPoints()));
    }
  }, [points, dispatch]);

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="860px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalMainInfoMapEdit())}
        style={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          fontSize: '14px',
          lineHeight: '20px',
          fontFamily: '"Ubuntu", sans-serif',
          color: '#333333'
        }}
      >
        <Modal.Header>
          <S.ModalHeaderWrapper>
            Объект на карте
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.MapInfo>
            Вы можете не только ставить метку местонахождения,
            а так же выделять периметр объекта создав несколько точек.
            Для добавления точки, используйте левую кнопку мыши.
            Для удаления созданной точки, требуется кликнуть на нее правой кнопкой мыши.
          </S.MapInfo>
          <S.MapContainer>
            <YMaps query={{
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
                width="795px"
                height="580px"
                onLoad={setYmaps}
                onClick={e => onAddPoint(e.get('coords'))}
              >
                <FullscreenControl />
                <TypeSelector />
                <ZoomControl />
                {points.length > 2
                    && (
                      <GeoObject
                        instanceRef={ref => ref && setCenter(ref)}
                        geometry={{
                          type: 'Polygon',
                          coordinates: [points.map(point => point.position.split(','))],
                          fillRule: 'nonZero'
                        }}
                        options={{
                          fillColor: '#37a87a33',
                          strokeColor: '#37a87aFF',
                          strokeWidth: 2,
                          strokeStyle: 'solid'
                        }}
                      />
                    )}
                {points.map((point, index) => (
                  <GeoObject
                    key={point.position}
                    instanceRef={points.length === 1 && (ref => ref && setCenter(ref))}
                    geometry={{
                      type: 'Point',
                      coordinates: point.position.split(',')
                    }}
                    options={{
                      draggable: true,
                      preset: 'islands#darkGreenCircleIcon',
                      color: '#37a87a'
                    }}
                    onDragEnd={e => onMovePoint(index, e.get('target').geometry.getCoordinates())}
                    onContextMenu={() => onDeletePoint(index)}
                  />
                ))}
              </Map>
            </YMaps>
          </S.MapContainer>
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            disabled={points.length === 2 || points.length === 0}
            style={{
              margin: '0 10px 0 0'
            }}
            use="primary"
            size="medium"
            onClick={() => handleSubmit()}
          >
            Сохранить
          </Button>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoMapEdit())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalMainInfoMapEdit;
