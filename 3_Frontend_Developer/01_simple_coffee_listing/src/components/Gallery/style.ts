import styled from "styled-components";

export const Gallery = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  @media (min-width: 360px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
  gap: 1.5rem;
`;
