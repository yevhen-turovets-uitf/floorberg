import styled from 'styled-components';
import * as GS from 'src/styles/styles';

export const Container = styled(GS.FlexContainer)`
  color: #333333;
`;

export const AvatarContainer = styled.div`
  background: #e5e5e5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 15px 0 0;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const Name = styled.div``;

export const Position = styled.div`
  color: #828282;
`;
