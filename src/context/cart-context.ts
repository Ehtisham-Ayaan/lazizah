import React from "react";
import { CartItemType } from "modules/ModuleTypes";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItemType) => {},
  removeItem: (id: string) => {}
})

export default CartContext;