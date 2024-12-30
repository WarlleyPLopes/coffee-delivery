import { useContext } from "react";

import { CartContext } from "../contexts/CartProvider.tsx";

export function useCart() {
  return useContext(CartContext);
}
