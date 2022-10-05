import styled from 'styled-components';

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 6px 8px;
  border: 1px solid black;
  border-radius: 3px;
`;

export const Textarea = styled.textarea`
  padding: 6px 8px;
  border: 1px solid black;
  border-radius: 3px;
  min-height: 50px;
`;

export const Select = styled.select`
  padding: 6px 8px;
  border: 1px solid black;
  border-radius: 3px;
`;

export const Error = styled.div`
  color: red;
`;
