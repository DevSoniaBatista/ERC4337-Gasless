import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}
    supportedWallets={[
      smartWallet({
        factoryAddress: "0x129d0fa421d5d10dA2d3B3d622818234f78113cF",
        thirdwebApiKey: "coloque a sua",
        gasless: true,
        personalWallets:[
          metamaskWallet(),
          localWallet()
        ]
      })
    ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
