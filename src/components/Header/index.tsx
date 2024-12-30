import { Link } from "react-router-dom";

import { HeaderContainer } from "./styles";
import { useCart } from "../../hooks/UseCart";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/src/assets/logo.svg" alt="Coffee Delivery" />
      </Link>

      <aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Vila Velha, ES</span>
        </div>

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </aside>
    </HeaderContainer>
  );
}
