import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: var(--radius);
  transition: 0.3s;
`;

export const ImageContainer = styled.div`
  display: block;
  position: relative;
`;

export const Tag = styled.span`
  display: inline-block;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: clamp(0.625rem, 1vw, 0.75rem);
  font-weight: 600;
  background: var(--tag);
  color: var(--tag-foreground);
  border-radius: var(--radius);
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: var(--radius);
  grid-column: span 2;
`;
export const Content = styled.div`
  padding: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 0.625rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
`;

export const Price = styled.span`
  display: inline-block;
  font-size: clamp(0.625rem, 2vw, 0.75rem);
  background: var(--primary);
  color: var(--primary-foreground);
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Avaliable = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  p {
    font-weight: 600;
  }

  span {
    display: inline-block;
    margin-left: 0.125rem;
    color: var(--secondary);
  }

  .no_ratings {
    font-size: 1rem;
  }
`;

export const NotStock = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--danger);
`;
