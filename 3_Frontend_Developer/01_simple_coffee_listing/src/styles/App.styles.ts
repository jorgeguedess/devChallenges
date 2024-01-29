import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 3rem;
`;

export const ImageMain = styled.div`
  width: 100%;
  height: 35vh;
  background: url("/bg-cafe.jpg") no-repeat center center / cover;
`;

export const ContainerMain = styled.main`
  width: 100%;
  max-width: auto;
  @media (min-width: 641px) {
    max-width: clamp(15rem, 85vw, 80rem);
  }
  margin-inline: auto;
  margin-top: -15vh;
  background: var(--card);
  color: var(--card-foreground);

  padding-block: 3.5rem;
  padding-inline: clamp(0.5rem, 5vw, 4rem);
  border-radius: var(--radius);
  position: relative;

  &::before {
    content: "";
    width: 12em;
    height: 140px;
    background: url("/vector.svg") no-repeat center / cover;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Header = styled.header`
  width: 100%;
  max-width: 30rem;
  margin-inline: auto;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2rem);
  position: relative;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: var(--secondary);
  margin-bottom: 1.25rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button<{ active?: boolean }>`
  font-size: 1rem;
  color: var(--secondary-foreground);
  border-radius: var(--radius);
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 500;
  transition: 0.3s;
  flex: 1;
  line-height: 1.5;

  @media (min-width: 360px) {
    flex: initial;
  }

  background: ${(props) =>
    props.active === true ? "var(--secondary)" : "var(--card)"};

  &:hover,
  &:focus {
    filter: brightness(1.3);
  }
`;
