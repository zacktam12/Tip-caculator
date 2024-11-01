import { useState } from "react";
import "./App.css";
import "./Styles.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
// this component holds all other components
function TipCalculator() {
  const [bill, setbill] = useState("");
  const [percentage1, setpercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function HandleReset() {
    setbill("");
    setpercentage1("");
    setpercentage2("");
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setbill} />
      <SelectPercentage percentage={percentage1} onselect={setpercentage1}>
        How much do you like the Service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onselect={setpercentage2}>
        {" "}
        How did your friend like the service{" "}
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset setReset={HandleReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>
        How much was the bill ?
        <input
          type="text"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
function SelectPercentage({ onselect, percentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onselect(Number(e.target.value))}
      >
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutly Amazing(20%)</option>
        <option value="0">Dissatisfied</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <div>
      <p>
        You pay ${tip + bill} [${bill} + ${tip}tip]
      </p>
    </div>
  );
}
function Reset({ setReset }) {
  return (
    <div>
      {" "}
      <button onClick={setReset}>Reset</button>
    </div>
  );
}
