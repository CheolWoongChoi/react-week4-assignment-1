import React from 'react';

import Input from './Input';
import ListContainer from './ListContainer';
import InputContainer from './InputContainer';

export default function Page() {
  return (
    <div>
      <h1>To-do</h1>
      <InputContainer />
      <ListContainer />
    </div>
  );
}
