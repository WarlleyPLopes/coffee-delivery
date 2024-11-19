import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 4px;

      border-radius: 6px;
      background: ${(props) => props.theme["purple-300"]};

      span {
        color: ${(props) => props.theme["purple-700"]};

        font-size: 0.875rem;
        font-style: normal;
        line-height: 130%; 
      }
    }

    a {
      background: ${(props) => props.theme["yellow-300"]};

      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 4px;

      border-radius: 6px;

      /* span {
        background: ${(props) => props.theme["yellow-700"]};
        color: ${(props) => props.theme["white"]};

        border-radius: 1000px;

      } */
    }
  }
`;
