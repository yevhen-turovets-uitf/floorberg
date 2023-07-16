import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.FlexContainer)`
  box-sizing: border-box;
  color: #333333;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  background: #FF9E45;
  margin: 15px 15px 0 0;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: calc(100% - 55px);
  padding: 20px;
  background: #FFFFFF;
  box-shadow: ${({ $approximateStatus }) => (
    $approximateStatus
      ? '0 0 0 1px #EB5757'
      : '0px 1px 2px rgba(0, 0, 0, 0.14), 0px 1px 6px rgba(0, 0, 0, 0.1)'
  )};
`;

export const ContentHeader = styled(GS.FlexContainer)`
  margin: 0 0 10px;
`;

export const TitleWithDate = styled(GS.FlexContainer)``;

export const Date = styled.div`
  margin: 0 15px 0 0;
  color: ${({ $approximateStatus }) => (
    $approximateStatus
      ? '#EB5757'
      : '#828282'
  )};
`;

export const Title = styled.div`
  margin: 0 15px 0 0;
`;

export const AvatarsWrapper = styled(GS.FlexContainer)``;

export const HintContainer = styled(GS.FlexContainer)``;

export const Status = styled.div`
  font-size: 12px;
`;

export const AvatarContainer = styled.div`
  margin: 0 0 0 10px;
  background: #e5e5e5;
  border-radius: 50%;
  width: 30px;
  height: 30px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
