import React, { useState } from "react";
import {token_backend, canisterId, createActor} from "../../../declarations/token_backend"; 


function Faucet() {

  const [isDisabled, setDisabled] = useState(false);
  const [buttonText, setBtnText] = useState('Gimme gimme');

  async function handleClick(event) {
    setDisabled(true);

    // const authClient = await AuthClient.create();
    // const identity = await AuthClient.getIdentity();

    // const authenticatedCanister = createActor(canisterId, {
    //   agent: {
    //     identity
    //   },
    // });

    const message = await token_backend.payOut();
    setBtnText(message);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free KASD tokens here! Claim 10,000 DANG coins to your account.</label>
      <p dis className="trade-buttons">
        <button disabled={isDisabled} id="btn-payout" onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
