import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../redux';
import { Register } from '../../components/pages';
import { registerForm } from '../../constants';

const typeMappedWithTagName = {
  text: 'INPUT',
  select: 'SELECT',
  textarea: 'TEXTAREA',
};

describe(('it tests Register page'), () => {
  test('it renders Register page component', () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    registerForm.forEach((field) => {
      const element = screen.getByTestId(field.id);
      expect(element).toBeDefined();
      expect(element.tagName).toBe(typeMappedWithTagName[field.type]);
    });
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeDefined();
  });
});
