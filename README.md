# token-IC

token-IC introduces a cryptographic token KASD, alongside an interface where individuals can claim 200,000 free tokens, and send or receive KASD tokens. Built with a React frontend and a Motoko backend, it fosters a seamless interaction with blockchain technology.

## Tech Stack

- Frontend: React
- Backend: Motoko

## Features

- Claim 200,000 free KASD tokens
- Send and receive KASD tokens

## Setup and Installation

TO-DO

## Contributing

Feel free to submit issues and enhancement requests.

## License

Copyright 2022 London App Brewery LTD (www.appbrewery.com)

The code in this tutorial project is licended under the Apache License, Version 2.0 (the "License");
you may not use this project except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Here is the TL;DR version of the above licence:
https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)

# IMPORTANT

The deployment process is quite difficult and I would strongly discourage to do so. The front end works fine though, but trying to interact with the interface might make crash the system.
To try the front end, run. 

npm install

npm start


# To Deploy

1. Find out your principal id:

```
dfx identity get-principal
```

2. Replace the <REPLACE WITH YOUR PRINCIPAL> in main.mo with the principal you got from step 1.

```
  let owner : Principal = Principal.fromText("<REPLACE WITH YOUR PRINCIPAL>");
```

3. Open up a new terminal in this VSCode project and deploy the token canister:

```
dfx deploy
```

4. Start the frontend:

```
npm start
```

5. Set the canister id to a local variable:

```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

6. Transfer half a billion tokens to the canister Principal ID:

```
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

7. Claim the tokens from the faucet on the frontend website.

8. Get token canister id:

```
dfx canister id token
```
