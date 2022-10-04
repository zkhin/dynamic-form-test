import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: 16px;

  @media only screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
