import React from 'react';
import { withState, withHandlers, compose } from 'recompose';

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
  <div>
    <label>Title</label>
    <input type="text" value={value} onChange={onChange} />
    <button onClick={onClick}>Add</button>
  </div>
));

export default InputForm;
