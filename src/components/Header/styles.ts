import styled from "styled-components";
import { typography } from "../../styles/typography";

export const HeaderContainer = styled.header`
  max-width: 74rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  aside {
    display: flex;
    gap: 0.75rem;

    div {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 4px;

      border-radius: 6px;
      background: ${({ theme }) => theme["purple-300"]};

      span {
        color: ${({ theme }) => theme["purple-700"]};
      }

      background-color: ${({ theme }) => theme["purple-300"]};

      svg {
        color: ${({ theme }) => theme["purple-700"]};
      }

      padding: 10px 8px;
      border-radius: 6px;
    }

    a {
      display: flex;
      align-items: center;

      background-color: ${({ theme }) => theme["yellow-300"]};
      color: ${({ theme }) => theme["yellow-700"]};

      padding: 8px;
      border-radius: 6px;

      position: relative;

      &[aria-disabled="true"] {
        pointer-events: none;
      }

      span {
        ${typography.fonts.textS};
        font-weight: bold;
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme["yellow-700"]};
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate(50%, -50%);
      }
    }
  }
`;
