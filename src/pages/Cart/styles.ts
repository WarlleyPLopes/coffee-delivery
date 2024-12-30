import styled from "styled-components";
import { typography } from "../../styles/typography";

export const Container = styled.div`
  display: flex;
  max-width: 72rem;
  padding: 40px 0;
  margin: 0 auto;
  gap: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    ${typography.fonts.titleXS};
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FormsContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["base-card"]};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const AddressContainer = styled(FormsContainer)``;

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    p {
      ${typography.fonts.textS};
    }
  }
`;

export const AddressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme["yellow-dark"]};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`;

export const PaymentContainer = styled(FormsContainer)``;

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme["purple-500"]};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`;

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme["base-card"]};
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme["base-button"]};
    margin: 24px 0;
  }
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme["base-button"]};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme["base-hover"]};
    }

    > svg {
      color: ${({ theme }) => theme["purple-500"]};
    }

    > span {
      ${typography.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme["base-text"]};
    }
  }
`;

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${typography.fonts.textS};
    }

    span:last-child {
      ${typography.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${typography.fonts.textL};
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  ${typography.fonts.buttonG};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme["yellow-500"]};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme["yellow-700"]};
  }

  border-radius: 6px;
`;
