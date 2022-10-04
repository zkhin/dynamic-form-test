import * as yup from 'yup';
import 'yup-phone'

export const formValidationSchema = (fields) => {
  const schema = fields.reduce((prev, field) => {
    let validator = yup.string();
    if (field.required) {
      validator = validator.required('This field is required');
    }
    if (field.id === 'email') {
      validator = validator.email('Invalid email');
    }
    if (field.id === 'phone') {
      validator = validator.phone(undefined, undefined, 'Invalid phone number');
    }
    return {
      ...prev,
      [field.id]: validator,
    }
  }, {});
  return yup.object().shape(schema);
};
