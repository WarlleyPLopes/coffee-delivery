import { QuantityInput } from "../../components/Form/QuantityInput/input";
import { TextInput } from "../../components/Form/TextInput";
import { defaultTheme } from "../../styles/themes/default";
import { Radio } from "../../components/Radio";
import { Fragment } from "react/jsx-runtime";
import { coffees } from "../../../data.json";
import { z } from "zod";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";

import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function Cart() {


  return (
    <Container>
      <InfoContainer>
        <h2>complete seu pedido</h2>
        <form id="order">
          <AddressContainer>
            <AddressHeading>
              <MapPinLine size={22} color={defaultTheme["yellow-700"]} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: "cep" } }}
              />
              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: "street" } }}
              />
              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: "number" } }}
              />
              <TextInput
                placeholder="Complemento"
                containerProps={{ style: { gridArea: "fullAddress" } }}
              />
              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: "neighborhood" } }}
              />
              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: "city" } }}
              />
              <TextInput
                placeholder="UF"
                containerProps={{ style: { gridArea: "state" } }}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </PaymentHeading>
            <PaymentOptions>
              <div>
                <Radio isSelected={true} value="credit">
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio isSelected={false} value="debit">
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio isSelected={false} value="cash">
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>
              {/* {errors.paymentMethod ? (
                <PaymentErrorMessage role="alert">
                  {errors.paymentMethod.message}
                </PaymentErrorMessage>
              ) : null} */}
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      {/* Confirmar pedido */}
      <InfoContainer>
        <h3>Cafés selecionados</h3>
        <CartTotal>
          <Fragment>
            <Coffee>
              <div>
                <img src="/src/assets/expresso.png" alt="" />
                <div>
                  <span>Expresso Tradicional</span>
                  <CoffeeInfo>
                    {/* <QuantityInput quantity={}/> */}
                    <button>
                      <Trash />
                      <span>Remover</span>
                    </button>
                  </CoffeeInfo>
                </div>
              </div>
              <aside>R$ 9,90</aside>
            </Coffee>
            <span />
          </Fragment>

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>10</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>10</span>
            </div>

            <div>
              <span>Total</span>
              <span>10</span>
            </div>
          </CartTotalInfo>
          <CheckoutButton type="submit" form="order">
            Confirmar pedido
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  );
}
