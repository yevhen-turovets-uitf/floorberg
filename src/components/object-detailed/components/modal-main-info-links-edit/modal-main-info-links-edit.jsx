import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';
import { Modal, Button, Input, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { Add, Trash } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalMainInfoLinksEdit = () => {
  const {
    activeLinks
  } = useSelector(store => ({
    activeLinks: store.objectDetailed.activeLinks
  }));
  const dispatch = useDispatch();
  const [newLinks, setNewLinks] = useState(activeLinks && activeLinks.length > 0
    ? activeLinks.map(item => ({ ...item }))
    : [{
      id: (Date.now().toString(36)
      + Math.random()
        .toString(36)
        .substr(2, 7)),
      link: '',
      text: '',
      created: true
    }]);
  const [isValidData, setValidData] = useState(activeLinks && activeLinks.length > 0
    ? activeLinks.map(() => ({ link: true, text: true }))
    : [{ link: true, text: true }]);

  const onLinksChange = (value, index) => {
    const newData = [...newLinks];
    newData[index].link = value;
    newData[index].changed = true;
    setNewLinks(newData);
  };

  const validateLinks = index => {
    const changedLink = newLinks[index];
    const newValidData = [...isValidData];

    if (!validator.isURL(changedLink.link)) {
      newValidData[index].link = false;
      setValidData(newValidData);
    } else if (validator.isEmpty(validator.trim(changedLink.link))) {
      newValidData[index].link = false;
      setValidData(newValidData);
    } else {
      newValidData[index].link = true;
      setValidData(newValidData);
    }
  };

  const unvalidateLinks = index => {
    const newValidData = [...isValidData];

    newValidData[index].link = true;
    setValidData(newValidData);
  };

  const onTextChange = (value, index) => {
    const newData = [...newLinks];
    newData[index].text = value;
    newData[index].changed = true;
    setNewLinks(newData);
  };

  const validateText = index => {
    const changedLink = newLinks[index];
    const newValidData = [...isValidData];

    if (validator.isEmpty(validator.trim(changedLink.text))) {
      newValidData[index].text = false;
      setValidData(newValidData);
    } else {
      newValidData[index].text = true;
      setValidData(newValidData);
    }
  };

  const unvalidateText = index => {
    const newValidData = [...isValidData];

    newValidData[index].text = true;
    setValidData(newValidData);
  };

  const addInputs = () => {
    const newData = [...newLinks, {
      id: (Date.now().toString(36)
      + Math.random()
        .toString(36)
        .substr(2, 7)),
      link: '',
      text: '',
      created: true
    }];
    setNewLinks(newData);
    const newValid = [...isValidData, { link: true, text: true }];
    setValidData(newValid);
  };

  const removeInputs = index => {
    const newData = [...newLinks];
    newData[index].deleted = true;
    setNewLinks(newData);

    const newValidData = [...isValidData];
    newValidData[index].link = true;
    newValidData[index].text = true;
    setValidData(newValidData);
  };

  const handleSubmit = () => {
    if (!(isValidData.some(elem => elem.link === false)
    || isValidData.some(elem => elem.text === false)
    || newLinks.some(elem => elem.link === '' && !elem.deleted)
    || newLinks.some(elem => elem.text === '' && !elem.deleted))) {
      dispatch(objectDetailedActionCreator.updateActiveLinks(newLinks));
    }
    dispatch(objectDetailedActionCreator.setModalMainInfoLinksEdit());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalMainInfoLinksEdit())}
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
            Описание
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ContentTitle>
            <div>Связанные ссылки:</div>
          </S.ContentTitle>
          {newLinks.length > 0
            && newLinks.map((item, index) => {
              if (!item.deleted) {
                return (
                  <S.Links
                    key={item.id}
                  >
                    <Input
                      size="medium"
                      error={!isValidData[index].link}
                      style={{ width: 'calc(48% - 25px)', margin: '0 2% 0 0' }}
                      placeholder="Ссылка"
                      value={item.link}
                      onFocus={() => unvalidateLinks(index)}
                      onBlur={() => validateLinks(index)}
                      onValueChange={value => onLinksChange(value, index)}
                    />
                    <Input
                      size="medium"
                      error={!isValidData[index].text}
                      style={{ width: 'calc(48% - 25px)', margin: '0 2% 0 0' }}
                      placeholder="Текст ссылки"
                      value={item.text}
                      onFocus={() => unvalidateText(index)}
                      onBlur={() => validateText(index)}
                      onValueChange={value => onTextChange(value, index)}
                    />
                    <Button
                      size="medium"
                      onClick={() => removeInputs(index)}
                    >
                      <Trash />
                    </Button>
                  </S.Links>
                );
              }
              return null;
            })}
          <Button onClick={addInputs} size="medium">
            <Add />
            {' '}
            Добавить еще
          </Button>
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            disabled={
              isValidData.some(elem => elem.link === false)
              || isValidData.some(elem => elem.text === false)
              || newLinks.some(elem => elem.link === '' && !elem.deleted)
              || newLinks.some(elem => elem.text === '' && !elem.deleted)
            }
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
            onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoLinksEdit())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalMainInfoLinksEdit;
