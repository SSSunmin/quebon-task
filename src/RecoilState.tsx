import { atom, selector } from "recoil";

export interface CartProps {
  id: number;
  name: string;
  price: number;
  amount: number;
  img: string;
}

export const CartInfo = atom<CartProps[]>({
  key: "CartInfo",
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((data) => {
        console.log("Current data", data);
      });
    },
  ],
});

export const TotlaCartCount = selector({
  key: "TotlaCartCount",
  get: ({ get }) => {
    const cartList = get(CartInfo);
    let TotalAmount = 0;
    cartList.map((list) => (TotalAmount += list.amount));
    return TotalAmount;
  },
});
