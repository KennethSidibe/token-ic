import React, { useState } from "react";
import {token_backend} from "../../../declarations/token_backend"; 
import { Principal } from "@dfinity/principal";


function Transfer() {

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}
  
  const [amount, setAmount] = useState('');
  const [transferId, setTranferId] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  const [buttonText, setBtnText] = useState('Transfer');

  async function transferWithClick() {
    setDisabled(true);
    const recipient = Principal.fromText(transferId);
    const amountToTrans = Number(amount);
    const result = await token_backend.transferTo(recipient, amountToTrans);
    setBtnText(result);
    await timeout(1000);
    setDisabled(false);
    setBtnText('Transfer');
  }


  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={transferId}
                onChange={ event => (setTranferId(event.target.value))}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={event => (setAmount(event.target.value))}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button disabled={isDisabled} id="btn-transfer" onClick={transferWithClick} >
            {buttonText}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Transfer;
