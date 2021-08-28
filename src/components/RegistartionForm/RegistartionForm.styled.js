import styled from '@emotion/styled/macro';
import { Form, Field } from 'formik';

export const FormWrap = styled.div`
background-color: var(--table-bg);
  width: 420px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 80px;
  padding: 15px;
  border-radius: 5px;
  color: var(--black-color);
  box-shadow: var(--box-shadow);
`;

export const Title = styled.h2`
  text-align: start;
`;

export const CustomForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  display: inline-block;
  flex-direction: column;
  align-items: baseline;
  text-align: start;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const LabelWrap = styled.span`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
  }
`;

export const Input = styled(Field)`
  display: block;
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

export const Button = styled.button`
  display: block;
  width: 100%;
  background-color: var(--accent-color);
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  color: var(--accent-color-light);

  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;

  cursor: pointer;

  margin: 0 auto;
  transition: all 300ms linear;

  &:hover,
  &:focus {
    color: var(--black-color);
    transform: scale(1.03);
  }
`;

export const ErrorMsg = styled.div`
  font-size: 14px;
  color: var(--notification-color);
  margin-bottom: 10px;
`;
