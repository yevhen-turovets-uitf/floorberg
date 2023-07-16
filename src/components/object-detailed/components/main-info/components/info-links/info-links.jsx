import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@skbkontur/react-ui';
import { Link as LinkIcon } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const InfoLinks = () => {
  const {
    activeLinks
  } = useSelector(store => ({
    activeLinks: store.objectDetailed.activeLinks
  }));
  const dispatch = useDispatch();

  if (!(activeLinks && activeLinks.length > 0)) {
    return (
      <S.InfoEmpty
        $align="center"
        $justify="space-between"
      >
        <Button
          onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoLinksEdit(true))}
        >
          <LinkIcon />
          {' '}
          Добавить ссылки
        </Button>
        <S.InfoHelpText>
          Добавьте ссылки на новостные сообщения,
          торговые площадки если предприятие ведет закупки и другие полезные источники
        </S.InfoHelpText>
      </S.InfoEmpty>
    );
  }
  return (
    <S.Container>
      {activeLinks.map(item => (
        <p key={item.text}>
          <S.InfoLink
            href={/^https:\/\//.test(item.link) || /^http:\/\//.test(item.link)
              ? `${item.link}`
              : `https://${item.link}`}
            target="_blank"
            rel="noreferrer"
          >
            {item.text}
          </S.InfoLink>
        </p>
      ))}
    </S.Container>

  );
};

export default InfoLinks;
