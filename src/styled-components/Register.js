import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: grid;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
