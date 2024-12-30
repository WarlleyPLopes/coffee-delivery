import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;

  display: flex;
  gap: 4px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme["purple-500"]};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme["purple-700"]};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme["base-title"]};
  }
`;