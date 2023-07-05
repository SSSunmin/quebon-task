import {
  MiniButton,
  CountInput,
  AmountCounterWrapper,
} from "@/styled-components/styled-components";
import { ChangeEvent, useState } from "react";

interface CounterProps {
  amountProps?: number;
  setCardAmount: (amount: number) => void;
  isShoppingBasket: boolean;
}
const AmountCounter = ({
  setCardAmount,
  isShoppingBasket,
  amountProps,
}: CounterProps) => {
  const [amount, setAmount] = useState(amountProps ? amountProps : 1);

  const AddCounter = () => {
    setAmount((prev) => prev + 1);
    setCardAmount(amount + 1);
  };
  const SubtractCounter = () => {
    setAmount((prev) => prev - 1);
    setCardAmount(amount - 1);
  };

  const CountInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setAmount(0);
      setCardAmount(0);
    } else {
      setAmount(parseInt(e.target.value));
      setCardAmount(parseInt(e.target.value));
    }
  };

  return (
    <AmountCounterWrapper isShoppingBasket={isShoppingBasket}>
      <MiniButton
        onClick={SubtractCounter}
        disabled={amount < 2 ? true : false}
        isShoppingBasket={isShoppingBasket}
      >
        -
      </MiniButton>
      <CountInput
        type="text"
        value={amount}
        onChange={(e) => CountInputHandler(e)}
        isShoppingBasket={isShoppingBasket}
      />
      <MiniButton onClick={AddCounter} isShoppingBasket={isShoppingBasket}>
        +
      </MiniButton>
    </AmountCounterWrapper>
  );
};
export default AmountCounter;
