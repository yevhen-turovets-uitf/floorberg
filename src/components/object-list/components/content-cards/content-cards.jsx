import React from 'react';
import { useSelector } from 'react-redux';
import { Tooltip } from '@skbkontur/react-ui';
import { MapPin } from '@skbkontur/react-icons';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { formatCurrency } from 'src/helpers/currency-helper';
import { findUsername } from 'src/helpers/search-helper';
import * as S from './styles';

const ContentCards = () => {
  const {
    userList,
    objectList
  } = useSelector(store => ({
    userList: store.objectList.userList,
    objectList: store.objectList.objectList
  }));

  return (
    <S.Container>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3, 1440: 4 }}>
        <Masonry gutter="16px">
          {objectList.map(item => (
            <S.NavItem
              key={item.id}
              to={`/${item.id}`}
            >
              <S.ItemHeader
                $justify="space-between"
              >
                <S.ItemName>
                  <span>{item.name}</span>
                  {item.isFavorite === 1 && (
                    <S.Star />
                  )}
                </S.ItemName>
                <S.ItemId>
                  {item.id}
                </S.ItemId>
              </S.ItemHeader>
              {item.address && (
                <S.ItemAddress>
                  <MapPin
                    color="#DADADA"
                  />
                  <S.ItemAddressText>
                    {item.address}
                  </S.ItemAddressText>
                </S.ItemAddress>
              )}
              {item.description && (
                <S.ItemDescription>
                  {item.description}
                </S.ItemDescription>
              )}
              <S.ItemInfo
                $justify="space-between"
              >
                <S.ItemDate>
                  {item.created_at.split(' ')[0].split('-').reverse().join('.')}
                </S.ItemDate>
                {item.opportunities.length > 0 && (
                  <div>
                    {item.opportunities.map(opportunitie => (
                      <S.TooltipContainer key={opportunitie.id}>
                        <Tooltip
                          style={{
                            fontSize: '13px',
                            lineHeight: '20px',
                            fontFamily: '"Ubuntu", sans-serif',
                            maxWidth: '400px'
                          }}
                          render={() => (
                            <>
                              <S.TooltipName>{opportunitie.name}</S.TooltipName>
                              <S.TooltipContent>
                                Вероятность:
                                {' '}
                                <S.TooltipContentStrong>
                                  {opportunitie.probability}
                                  %
                                </S.TooltipContentStrong>
                                <br />
                                Бюджет:
                                {' '}
                                <S.TooltipContentStrong>
                                  {formatCurrency(opportunitie.budget)}
                                </S.TooltipContentStrong>
                                <br />
                                Создал:
                                {' '}
                                <S.TooltipContentStrong>
                                  {userList.length > 0 && (findUsername(userList, item.created_by))}
                                </S.TooltipContentStrong>
                              </S.TooltipContent>
                            </>
                          )}
                          pos="bottom center"
                        >
                          <S.Dot $percent={opportunitie.probability} />
                        </Tooltip>
                      </S.TooltipContainer>
                    ))}
                    &gt;
                    {' '}
                    {formatCurrency(item.opportunities.length > 1
                      ? item.opportunities.reduce((accumulator, currentValue) => accumulator + currentValue.budget, 0)
                      : item.opportunities[0].budget)}
                  </div>
                )}
              </S.ItemInfo>
            </S.NavItem>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </S.Container>
  );
};

export default ContentCards;
