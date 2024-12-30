import { ShoppingCart } from "phosphor-react";

import {
  CoffeeImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tag,
  Title,
} from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";
import { QuantityInput } from "../../../../components/Form/QuantityInput/input";
import { useState } from "react";
import { useCart } from "../../../../hooks/UseCart";

interface Props {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
}

export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false)
  const {addItem} = useCart()

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem(){
    addItem({id: coffee.id, quantity})
    setIsItemAdded(true)
    setQuantity(1)
  }
  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />
      <Tag>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tag>
      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button disabled={isItemAdded} onClick={handleAddItem}>
          <ShoppingCart
              weight="fill"
              size={22}
              color={defaultTheme["base-card"]}
            />
          </button>
        </Order>
      </Control>
    </Container>
  );
}
