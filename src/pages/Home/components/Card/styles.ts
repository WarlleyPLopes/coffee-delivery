import styled from "styled-components";
import { typography } from "../../../../styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  background: ${({ theme }) => theme["base-card"]};
`;

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 12px;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme["yellow-300"]};
    color: ${({ theme }) => theme["yellow-700"]};
    text-transform: uppercase;
    ${typography.fonts.tag}
  }
`;

export const Title = styled.h3`
  margin-top: 16px;
  color: ${({ theme }) => theme["base-subtitle"]};
  ${typography.fonts.titleS}
`;

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${({ theme }) => theme["base-label"]};
  ${typography.fonts.textS}
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
  align-items: center;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${typography.fonts.textS};
    color: ${({ theme }) => theme["base-text"]};
  }

  span:last-child {
    ${typography.fonts.titleM};
    color: ${({ theme }) => theme["base-text"]};
  }
`;

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme["yellow-700"] : theme["purple-700"]};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme["yellow-500"] : theme["purple-500"]};
    }
  }
`;

