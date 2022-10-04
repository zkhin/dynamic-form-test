import { RegisterContainer } from '../../styled-components';
import { registerForm } from '../../constants';

export const Register = () => {
  return (
    <form>
      <RegisterContainer>
        {registerForm.map((field) => (
          <div>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </RegisterContainer>
    </form>
  );
};
