import React from 'react';
import styled from 'styled-components';
import { withState, withHandlers, compose } from 'recompose';
import colors from '../constants/colors';

const InputFormWrapper = styled.div`
  background: #f1f1f1;
  padding: 20px;
`;

const InputContainer = styled.div`
  background: #fff;
  border-radius: 30px;
  display: flex;
  overflow: hidden;
  align-items: center;
  input {
    flex: 1;
    height: 30px;
    border: 0;
    padding: 5px 20px;
    font-size: 16px;
    color: #6a6a79;
    :focus {
      outline: 0;
    }

    ::placeholder {
      color: #ccc;
      font-weight: 300;
    }
  }

  button {
    background-color: ${colors.GREEN};
    color: ${colors.DARK_GREEN};
    width: 32px;
    height: 32px;
    border-radius: 100%;
    margin-right: 5px;
    font-size: 18px;
    border: none;
    box-shadow: 0px 6px 15px 0px rgba(207, 211, 218, 0.35);
    cursor: pointer;
  }
`;

const enhance = compose<Props, any>(
  withState('value', 'updateValue', ''),
  withHandlers({
    onChange: (props: Props) => (event: any) => {
      props.updateValue(event.target.value);
    },
    onClick: (props: Props) => (event: any) => {
      event.preventDefault();
      props.onAddTodo(props.value);
    },
  }),
);

interface Props {
  value?: string;
  onChange?: any;
  onClick?: any;
  updateValue?: any;
  onAddTodo: any;
}

const InputForm = enhance(({ value, onChange, onClick }: Props) => (
  <InputFormWrapper>
    <InputContainer>
      <input type="text" value={value} onChange={onChange} placeholder="Write something ..." />
      <button onClick={onClick}>+</button>
    </InputContainer>
  </InputFormWrapper>
));

export default InputForm;
