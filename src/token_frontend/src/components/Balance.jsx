import React, { useState } from "react";
import { Principal } from "../../../../node_modules/@dfinity/principal/lib/cjs/index";
import {token_backend} from "../../../declarations/token_backend"; 

function Balance() {

  const [inputValue, setInputValue] = useState('');
  const [balanceResult, setBalance] = useState('');
  const [symbolFetched, setSymbol] = useState('');
  const [isHidden, setHidden] = useState(true);
  
  async function handleClick() {
    const principal = Principal.fromText(inputValue);
    const balance = await token_backend.balanceOf(principal);
    const symbol = await token_backend.getSymbol();
    setBalance(balance.toLocaleString());
    setSymbol(symbol);
    setHidden(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden} >This account has a balance of {balanceResult} {symbolFetched}.</p>
    </div>
  );
}

export default Balance;
