import styled from 'styled-components';
import * as GS from 'src/styles/styles';
import * as LS from '../../styles';

export const Employee = styled(GS.FlexContainer)`
  padding: 15px;
  box-shadow: 0 0 0 1px #E1E1E1;
`;

export const EmployeeMain = styled(GS.FlexContainer)`
  margin: 0 0 15px 0;
`;

export const AvatarContainer = styled.div`
  background: #e5e5e5;
  width: 64px;
  height: 64px;

  svg {
    width: 64px;
    height: 64px;
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 64px;
  height: 64px;
`;

export const EmployeeData = styled.div`
  width: calc(100% - 26px - 64px);
  padding: 0 15px;
`;

export const EmployeePosition = styled.div`
  font-size: 11px;
  line-height: 14px;
`;

export const EmployeeName = styled.div`
  line-height: 1.2;
`;

export const MenuItem = styled(LS.MenuItem)``;

export const Textarea = styled(LS.Textarea)``;

export const TooltipContent = styled(LS.TooltipContent)``;

export const Button = styled(LS.Button)``;

export const CommentBlock = styled.div`
  width: 100%;
  height: 82px;
  border: 1px solid #E2E2E2;
  border-radius: 2px;
  padding: 5px 10px;
  overflow: auto;
  white-space: pre-wrap;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background: #E7E7E7;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: #B3B3B3;
  }
`;
