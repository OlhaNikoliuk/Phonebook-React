import styled from '@emotion/styled/macro';

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Welcome = styled.span`
  font-size: 26px;
  font-weight: 700;
  margin-right: 12px;
  color: #ec96a4;
`;

export const OutBtn = styled.button`
  display: inline-flex;
  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 4px 8px;
  color: #ec96a4;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;

  margin: 0 auto;
  margin-left: 15px;
  transition: all 300ms linear;

  &:hover,
  &:focus {
    color: #283655;
    transform: scale(1.03);
  }
`;
