import { MiniButton, CountInput } from "@/styled-components/styled-components";
import { ChangeEvent, useState } from "react";

interface CounterProps {
  setCardAmount: (amount: number) => void;
}
const AmountCounter = ({ setCardAmount }: CounterProps) => {
  const [amount, setAmount] = useState(1);

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
    <div>
      <MiniButton
        onClick={SubtractCounter}
        disabled={amount < 2 ? true : false}
      >
        -
      </MiniButton>
      <CountInput
        type="text"
        value={amount}
        onChange={(e) => CountInputHandler(e)}
      />
      <MiniButton onClick={AddCounter}>+</MiniButton>
    </div>
  );
};
export default AmountCounter;
