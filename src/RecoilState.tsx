import { atom, selector, useSetRecoilState, AtomEffect } from "recoil";
import { recoilPersist } from "recoil-persist";
export interface CartProps {
  id: number;
  title: string;
  price: number;
  amount: number;
  image: string;
}

const ssrCompleted = atom({
  key: "ssrCompleted",
  default: false,
});

export const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompleted);
  return () => setSsrCompleted(true);
};
const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "shoppingBasketList",
  storage: localStorage,
  converter: JSON,
});

export const persistAtomEffect = <T,>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompleted).then(() => persistAtom(param));
};

export const SelectProduct = atom<number[]>({
  key: "SelectProduct",
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((newdate) => {
        console.log("SelectProduct", newdate);
      });
    },
  ],
});

export const CartInfo = atom<CartProps[]>({
  key: "CartInfo",
  default: [],
  effects_UNSTABLE: [persistAtomEffect],
});

export const TotlaCartPrice = selector({
  key: "TotlaCartPrice",
  get: ({ get }) => {
    const cartList = get(CartInfo);
    const Selected = get(SelectProduct);
    let TotalPrice = 0;
    cartList.map((list, index) => {
      if (Selected.indexOf(list.id) !== -1) {
        TotalPrice += list.price * list.amount;
      }
    });
    return TotalPrice.toFixed(2);
  },
});

export const SelectedCartInfo = selector({
  key: "SelectedCartInfo",
  get: ({ get }) => {
    const cartList = get(CartInfo);
    const Selected = get(SelectProduct);
    let selecedProoduct: CartProps[] = [];
    cartList.map((list, index) => {
      if (Selected.indexOf(list.id) !== -1) {
        selecedProoduct.push(list);
      }
    });
    return selecedProoduct;
  },
});
