import styled from "styled-components";
import { typography } from "../../styles/typography";

export const Hero = styled.section`
  position: relative;

  #img-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100%;
    object-fit: cover;
  }
`;

export const HeroContent = styled.div`
  max-width: 72rem;
  padding: 5.75rem 0;

  margin: 0 auto;
  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4.125rem;

  h1 {
    ${typography.fonts.titleXL}
    color: ${({ theme }) => theme["base-title"]};
  }

  p {
    ${typography.fonts.textL}
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
      display: flex;
      gap: 0.5rem;

      background: ${({ theme }) => theme["base-text"]};
    }
  }
`;

export const CoffeeList = styled.section`
  max-width: 72rem;
  padding: 32px 0 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${typography.fonts.titleL}
    color: ${({ theme }) => theme["base-subtitle"]}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`;
