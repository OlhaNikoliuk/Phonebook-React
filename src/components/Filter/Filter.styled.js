import styled from '@emotion/styled/macro';

export const FilterInput = styled.input`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 400px;
  height: 35px;

  border: none;

  padding-left: 15px;

  background-color: transparent;
  border-bottom: 1px solid var(--black-color);
  &::placeholder {
    color: var(--accent-color-light);
  }
  &:placeholder-shown {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--black-color);
  }
`;

export const Label = styled.label`
  text-align: start;
  display: inline-block;
  align-items: baseline;

  font-size: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  & > svg {
    margin-right: 10px;
  }
`;
