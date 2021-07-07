import styled from "styled-components";

export const ContainerCardGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media(max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`