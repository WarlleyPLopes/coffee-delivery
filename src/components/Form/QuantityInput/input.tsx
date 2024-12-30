import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";

type Props = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </Container>
  );
}
