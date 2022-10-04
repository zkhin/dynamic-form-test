import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailWrapper = styled.div`
  display: grid;
  gap: 16px;

  @media only screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: row;
`;
