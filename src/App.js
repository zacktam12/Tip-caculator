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
function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How much do you like the Service?</SelectPercentage>
      <SelectPercentage>
        {" "}
        How did your friend like the service{" "}
      </SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}
function BillInput() {
  const [amount, setamount] = useState("80");

  return (
    <div>
      <label>
        How much was the bill ?<input type="text" value={amount} />
      </label>
    </div>
  );
}
function SelectPercentage({ children }) {
  return (
    <div>
      <labrl>{children}</labrl>
      <select>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutly Amazing(20%)</option>
        <option value="0">Dissatisfied</option>
      </select>
    </div>
  );
}
function Output() {
  return (
    <div>
      <p>
        You pay {} {}
      </p>
    </div>
  );
}
function Reset() {
  return (
    <div>
      {" "}
      <button>Reset</button>
    </div>
  );
}
