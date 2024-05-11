import { IBook } from "@/types/Book";
import { IBillingDetails, IShippingDetails, PaymentMethod } from "@/types/Customer";
import { create } from "zustand";

export interface IState {
  cart: { book: IBook, qty: number, total: number }[]
  subtotal: number
  discount: number
  billing_details: IBillingDetails
  shipping_details: IShippingDetails
  payment_method?: PaymentMethod
  paid: boolean
}

export interface IAction {
  addToCart: (book: IBook) => void
  removeFromCart: (book: IBook) => void
  changeQty: (book: IBook, qty: number, isIncrease: boolean) => void
  clearCart: () => void
  addDiscount: (discount: number) => void
  addBillingDetails: (details: IBillingDetails) => void
  addShippingDetails: (details: IShippingDetails) => void
  addPaymentMethod: (method: PaymentMethod) => void
  pay: () => void
}

const initialBilling: IBillingDetails = {
  firstName: '',
  address: '',
  city: '',
  country: '',
  email: '',
  phone: '',
  postalCode: '',
}

const initialState: IState = {
  cart: [],
  subtotal: 0,
  discount: 0,
  billing_details: initialBilling,
  shipping_details: initialBilling,
  paid: false
}

const useCartStore = create<IState & IAction>(set => ({
  ...initialState,
  addToCart: (book: IBook) => set(state => ({
    ...state,
    cart: state.cart.find((bk) => bk.book.id === book.id)
      ? [...state.cart.map(bk => bk.book.id === book.id ? { ...bk, qty: bk.qty + 1, total: (bk.qty + 1) * bk.book.price } : bk)]
      : [...state.cart, { book, qty: 1, total: book.price }],
    subtotal: state.subtotal + book.price
  })),
  removeFromCart: (book: IBook) => set(state => {
    const existingBook = state.cart.find(bk => bk.book.id === book.id);
    return {
    ...state,
    cart: state.cart.filter(bk => bk.book.id !== book.id),
    subtotal: state.subtotal - (book.price * (existingBook ? existingBook.qty : 1))
  }
  }),
  changeQty: (book: IBook, qty: number) => set(state => {
    const existingBook = state.cart.find(bk => bk.book.id === book.id);
    if (!existingBook) {
      return state;
    }

    let newQty = qty
    newQty = Math.max(0, newQty); 

    const updatedCart = state.cart.map(bk =>
      bk.book.id === book.id ? { ...bk, qty: newQty, total: newQty * bk.book.price } : bk
    );

    return {
      ...state,
      cart: updatedCart,
      subtotal: state.subtotal + (newQty - existingBook.qty) * book.price
    };
  }),
  clearCart: () => set(state => ({
    ...state,
    cart: [],
    subtotal: 0,
    discount: 0
  })),
  addDiscount: (dis: number) => set(state => ({
    ...state,
    discount: dis
  })),
  addBillingDetails: (details: IBillingDetails) => set(state => ({
    ...state,
    billing_details: details
  })),
  addShippingDetails: (details: IShippingDetails) => set(state => ({
    ...state,
    shipping_details: details
  })),
  addPaymentMethod: (method: PaymentMethod) => set(state => ({
    ...state,
    payment_method: method
  })),
  pay: () => set(state => ({
    ...state,
    paid: true
  }))
}))

export default useCartStore
