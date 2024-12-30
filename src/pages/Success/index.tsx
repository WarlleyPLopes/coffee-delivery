import { useParams } from "react-router-dom";

import { Container, Heading, Info, InfoContent, Order } from "./styles";
import { useCart } from "../../hooks/UseCart";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";

export function Success() {
  const { orders } = useCart();
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));

  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={defaultTheme.white}
                style={{ backgroundColor: defaultTheme["purple-500"] }}
                size={32}
              />

              <div>
                <span>
                  Entrega em{" "}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer
                color={defaultTheme.white}
                style={{ backgroundColor: defaultTheme["yellow-500"] }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={defaultTheme.white}
                style={{ backgroundColor: defaultTheme["yellow-500"] }}
                size={32}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src="/src/assets/delivery.svg" alt="Pedido concluído" />
    </Container>
  );
}
