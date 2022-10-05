import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { Field as FieldComponent } from '../molecules';
import { Button, RegisterContainer } from '../../styled-components';
import { formValidationSchema, registerForm } from '../../constants';
import { update } from '../../redux/reducer/form';

export const Register = () => {
  const dispatch = useDispatch();
  const initialValues = registerForm.reduce((previous, current) => ({
    ...previous,
    [current.id]: '',
  }), {});
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema(registerForm)}
      onSubmit={(values) => {
        dispatch(update(values));
      }}
    >
      <Form>
        <RegisterContainer>
          {registerForm.map((field) => (
            <div key={field.id}>
              <Field
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                component={FieldComponent}
                data-testid={field.id}
              >
                {field.type === 'select' && (
                  <>
                    {field.options.map((option, index) => (
                      <option key={`${option}-${index}`}>{option}</option>
                    ))}
                  </>
                )}
              </Field>
            </div>
          ))}
        </RegisterContainer>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
