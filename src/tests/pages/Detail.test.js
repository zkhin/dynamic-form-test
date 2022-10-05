import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../redux';
import { Detail } from '../../components/pages';

describe(('it tests Detail page'), () => {
  test('it renders Detail page component', () => {
    const form = {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'example@email.com',
      address1: 'Address1',
      city: 'City',
      state: 'State',
      zip: 'Zipcode',
      phone: '+123456789',
      jobTitle: 'Job Title',
      reason: 'Reason',
    };
    render(
      <Provider store={store}>
        <Detail form={form} />
      </Provider>
    );
    Object.values(form).forEach((value) => {
      const textElement = screen.getByText(value);
      expect(textElement).toBeDefined();
    });
    // Back button should be defined
    const buttonElement = screen.getByText('Back');
    expect(buttonElement).toBeDefined();
  });
});
