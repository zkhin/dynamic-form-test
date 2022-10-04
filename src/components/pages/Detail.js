import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import {
  Button,
  FieldRow,
  DetailContainer,
  DetailWrapper,
} from '../../styled-components';
import { registerForm } from '../../constants';
import { reset } from '../../redux/reducer/form';

export const Detail = ({ form }) => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(reset());
  };

  return (
    <DetailContainer>
      <h1>Thank you!</h1>
      <DetailWrapper>
        {registerForm.map((field) => (
          <FieldRow key={field.id}>
            <label>{field.label}:</label>&nbsp;
            <span>{form[field.id]}</span>
          </FieldRow>
        ))}
        <Button onClick={handleBack}>Back</Button>
      </DetailWrapper>
    </DetailContainer>
  );
};

Detail.propTypes = {
  form: PropTypes.object.isRequired,
};
