import React from "react";

export interface MealItemType {
  key: string, 
  id: string,
  name: string,
  description: string,
  price: number
}

export interface ModalProps {
  onClose: () => void; 
  children?: React.ReactNode
}

export interface HeaderProps {
  onShowCart: () => void; 
  children?: React.ReactNode
}

export interface HeaderCartButtonProps {
  onClick: () => void; 
}

export interface InputProps {
  label: string,
  input: {
    id: string,
    type?: string,
    min?: string,
    max?: string,
    step?: string,
    defaultValue?: string
  },
  ref: React.InputHTMLAttributes<HTMLInputElement>
}

export interface CartItemType {
  id: string,
  name: string,
  amount: number,
  price: number,
  onRemove?: () => void,
  onAdd?: () => void
}

export interface MealItemFormType {
  onAddToCart: (enteredAmountNumber: number) => void
}

export interface CartAction {
  type: "ADD_ITEM" | "REMOVE_ITEM";
  item?: CartItemType;
  id?: string;
}

export interface CartState {
  items: CartItemType[];
  totalAmount: number;
}