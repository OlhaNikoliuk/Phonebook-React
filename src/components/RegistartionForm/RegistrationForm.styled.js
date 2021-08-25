import styled from '@emotion/styled/macro';

export const FormWrap = styled.div`
  background-color: var(--bg-section);
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 150px;
  padding: 15px;
  border-radius: 5px;
  color: var(--text-color-main);
`;

export const Title = styled.h2`
  text-align: start;
`;
export const CustomForm = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  text-align: start;
  font-size: 18px;
  margin-bottom: 10px;

  & > svg {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 400px;
  height: 35px;

  border: none;
  border-radius: 4px;
  padding-left: 15px;
  color: #444c5c;

  &:placeholder-shown {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #444c5c;
    box-shadow: 3px 4px 5px 0px rgb(120 165 163 / 20%);
  }
`;

export const Button = styled.button`
  display: block;
  min-width: 100px;
  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  color: #ec96a4;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;

  cursor: pointer;

  margin: 0 auto;
  margin-top: 15px;
  transition: all 300ms linear;

  &:hover,
  &:focus {
    color: #283655;
    transform: scale(1.03);
  }
`;

export const ErrorMsg = styled.div`
  font-size: 14px;
  color: var(--notification-color);
  margin-bottom: 10px;
`;
