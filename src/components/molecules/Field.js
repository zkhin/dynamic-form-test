import PropTypes from 'prop-types';

import {
  Error,
  FieldContainer,
  Input,
  Select,
  Textarea,
} from '../../styled-components';

export const Field = ({
  field,
  type,
  children,
  form: { touched, errors },
  ...props
}) => {
  let fieldComponent = null;

  switch (type) {
    case 'textarea':
      fieldComponent = <Textarea {...field} {...props} />;
      break;
    case 'select':
      fieldComponent = <Select {...field} {...props}>{children}</Select>;
      break;
    default:
      fieldComponent = <Input {...field} {...props} />;
      break;
  }

  return (
    <FieldContainer>
      {fieldComponent}
      {touched[field.name] && errors[field.name] && (
        <Error>
          {errors[field.name]}
        </Error>
      )}
    </FieldContainer>
  );
};

Field.propTypes = {
  field: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.any,
  form: PropTypes.object,
};

Field.defaultProps = {
  children: null,
  form: { touched: {}, errors: {} },
};
