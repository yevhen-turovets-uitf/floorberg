/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Button,
  Checkbox,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import { Send2 } from '@skbkontur/react-icons';
import validator from 'validator';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalHeaderNotifications = () => {
  const {
    subscribes
  } = useSelector(store => ({
    subscribes: store.objectDetailed.subscribes
  }));
  const dispatch = useDispatch();
  const [mainData, setMainData] = useState();
  const [telegramUrl, setTelegramUrl] = useState();
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (!subscribes.url) {
      setMainData([
        {
          checked: !!subscribes.find(elem => elem === 19),
          text: 'Завершенная задача',
          type: [19]
        },
        {
          checked: !!subscribes.find(elem => elem === 9),
          text: 'Проведенная встреча',
          type: [9]
        },
        {
          checked: !!subscribes.find(elem => elem === 7) && !!subscribes.find(elem => elem === 8),
          text: 'Телефонный разговор',
          type: [7, 8]
        },
        {
          checked: !!subscribes.find(elem => elem === 2),
          text: 'Созданная возможность',
          type: [2]
        },
        {
          checked: !!subscribes.find(elem => elem === 5) && !!subscribes.find(elem => elem === 14),
          text: 'Привязка контрагента',
          type: [5, 14]
        }
      ]);

      setTelegramUrl();
    } else {
      setTelegramUrl(subscribes.url);
    }
  }, [subscribes]);

  const onChangeMainData = index => {
    const newMainData = [...mainData];
    newMainData[index].checked = !mainData[index].checked;

    setMainData(newMainData);
  };

  const handleSubmit = () => {
    dispatch(objectDetailedActionCreator.updateSubscribes({
      subscribes: mainData.map(elem => elem.type.map(type => ({
        checked: elem.checked,
        type
      }))).flat()
    },
    removed));
    dispatch(objectDetailedActionCreator.setModalHeaderNotifications());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="780px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalHeaderNotifications())}
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
            Настройки объекта
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.SubTitle>
            Уведомлять в Telegram о событиях по договору
          </S.SubTitle>
          {telegramUrl && (
            <S.Subscribe
              $align="center"
            >
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  style={{
                    margin: '0 20px 0 0'
                  }}
                  use="primary"
                  size="medium"
                  icon={<Send2 />}
                >
                  Подтвердить Telegram
                </Button>
              </a>
              <S.Text>
                Для работы уведомлений, Telegram аккаунт требует подтверждения
              </S.Text>
            </S.Subscribe>
          )}
          <S.CheckboxContainer
            $wrap="wrap"
          >
            {mainData
            && mainData.map((elem, index) => (
              <Checkbox
                key={elem.text}
                style={{
                  width: '50%',
                  fontSize: '16px',
                  lineHeight: '22px',
                  margin: '0 0 15px'
                }}
                disabled={telegramUrl}
                checked={elem.checked}
                onValueChange={() => onChangeMainData(index)}
              >
                {elem.text}
              </Checkbox>
            ))}
          </S.CheckboxContainer>
          <S.SubTitle>
            Удаление объекта
          </S.SubTitle>
          <S.CheckboxContainer
            $wrap="wrap"
          >
            <Checkbox
              style={{
                width: '50%',
                fontSize: '16px',
                lineHeight: '22px',
                margin: '0 0 15px'
              }}
              checked={removed}
              onValueChange={() => setRemoved(!removed)}
            >
              Пометить объект на удаление
            </Checkbox>
          </S.CheckboxContainer>
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            style={{
              margin: '0 10px 0 0'
            }}
            use="primary"
            size="medium"
            onClick={() => handleSubmit()}
          >
            Подтвердить
          </Button>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalHeaderNotifications())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalHeaderNotifications;
