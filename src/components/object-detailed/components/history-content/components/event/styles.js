import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.FlexContainer)`
  color: #333333;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1B9FFF ${({ $iconPath }) => (
    $iconPath
      ? `url(${$iconPath}) 50% 50% no-repeat`
      : ''
  )};
  margin: 15px 15px 0 0;
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: calc(100% - 55px);
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.14), 0px 1px 6px rgba(0, 0, 0, 0.1);
`;

export const ContentHeader = styled(GS.FlexContainer)`
  margin: 0 0 10px;
`;

export const TitleWithDate = styled(GS.FlexContainer)``;

export const Date = styled.div`
  margin: 0 15px 0 0;
  color: #828282;
`;

export const Title = styled.div`
  margin: 0 15px 0 0;
`;

export const AvatarContainer = styled.div`
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
