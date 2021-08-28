import styled from '@emotion/styled/macro';

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Welcome = styled.span`
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  margin-right: 12px;
  color: var(--black-color);
`;

export const OutBtn = styled.button`
  display: inline-flex;
  background-color: var(--accent-color);
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 4px 8px;
  color: var(--accent-color-light);
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;

  margin: 0 auto;
  margin-left: 15px;
  transition: all 300ms linear;

  &:hover,
  &:focus {
    color: var(--black-color);
    transform: scale(1.03);
  }
`;
