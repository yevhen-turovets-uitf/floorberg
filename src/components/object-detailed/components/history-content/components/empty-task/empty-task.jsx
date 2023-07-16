import React from 'react';
import { Center } from '@skbkontur/react-ui';
import { Calendar } from '@skbkontur/react-icons';
import * as S from './styles';

const EmptyTask = () => (
  <S.Container
    $justify="space-between"
  >
    <S.Icon>
      <Center>
        <Calendar style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        />
      </Center>
    </S.Icon>
    <S.Content>
      У вас нет запланированных задач
    </S.Content>
  </S.Container>
);

export default EmptyTask;
