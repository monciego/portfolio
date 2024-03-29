import Image from 'next/image';
import styled from 'styled-components';

export const TestimonialsContainer = styled.section``;

export const TestimonialCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0.9rem;
  grid-row-gap: 0.9rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialStyledCard = styled.figure`
  position: relative;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #1e293b;
  line-height: 1.25rem;
`;

export const TestimonialContainer = styled.figcaption``;

export const AvatarContainer = styled.div`
  position: relative;
  margin-top: 0.25rem;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
`;

export const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TestimonialAvatar = styled(Image)`
  border-radius: 9999px;
`;

export const TestimonialInformation = styled.div``;

export const TestimonialName = styled.span`
  --min: 0.9em;
  --val: 2.5vw;
  --max: 1.05rem;
  line-height: 1rem;
  font-weight: 500;
`;

export const TestimonialPosition = styled.p`
  --min: 0.8em;
  --val: 2.5vw;
  --max: 0.95em;
  color: #d9dde1;
`;

export const TestimonialContent = styled.p`
  --min: 0.75em;
  --val: 2.5vw;
  --max: 0.95em;
  margin-top: 1rem;
  color: #d1d5db;
`;
