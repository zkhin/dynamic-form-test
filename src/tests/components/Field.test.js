import { render, screen } from '@testing-library/react';
import { Field } from '../../components/molecules';

describe(('it tests Field component'), () => {
  test('it renders text field', () => {
    render(
      <Field type="input" field={{}} data-testid="test-input" />
    );
    const inputElement = screen.getByTestId('test-input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe('INPUT');
  });

  test('it renders error', async () => {
    const props = {
      field: { name: 'city' },
      form: {
        touched: { city: true },
        errors: { city: 'City error' },
      },
    };
    render(
      <Field type="input" {...props} data-testid="test-input" />
    );
    const errorElement = await screen.findByTestId('test-error');
    expect(errorElement).toBeDefined();
    expect(errorElement.textContent).toBe('City error');
  });

  test('it renders textarea field', () => {
    render(
      <Field type="textarea" field={{}} data-testid="test-textarea" />
    );
    const textAreaElement = screen.getByTestId('test-textarea');
    expect(textAreaElement).toBeInTheDocument();
    expect(textAreaElement.tagName).toBe('TEXTAREA');
  });

  test('it renders select field', () => {
    render(
      <Field type="select" field={{}} data-testid="test-select" />
    );
    const selectElement = screen.getByTestId('test-select');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.tagName).toBe('SELECT');
  });
});
