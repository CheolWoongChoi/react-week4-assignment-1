import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from '../__mocks__/react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  }));

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
  expect(getByText(/아무 것도 하지 않기 #2/)).not.toBeNull();

  const buttons = getAllByText('완료');

  fireEvent.click(buttons[0]);

  expect(dispatch).toBeCalledWith({ type: 'deleteTask', payload: { id: 1 } });
});
