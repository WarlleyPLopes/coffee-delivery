import { produce } from "immer";
import { ActionTypes, type Actions } from "./actions";

export interface Item {
  id: string;
  quantity: number;
}

export interface Order {
  id: number;
  items: Item[];
}

export interface CartState {
  cart: Item[];
  orders: Order[];
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id
        );
        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity + -action.payload.item.quantity;
        } else {
          draft.cart.push(action.payload.item);
        }
      });

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemoveId = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        );
        draft.cart.splice(itemToRemoveId, 1);
      });

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId
        );

        if (itemToIncrement?.id) {
          itemToIncrement.quantity += 1;
        }
      });

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId
        );

        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1;
        }
      });

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        };
        draft.orders.push(newOrder);
        draft.cart = [];

        action.payload.callback(`/order/${newOrder.id}/success`);
      });
    default:
      return state;
  }
}
