import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { infuraProvider } from "wagmi/providers/infura";
import { infuraID } from "utils/constants";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [infuraProvider({ apiKey: infuraID }), publicProvider()]
);

const client = createClient(
  getDefaultClient({
    autoConnect: true,
    provider,
    appName: "Your App Name",
    webSocketProvider,
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        customTheme={{
          "--ck-font-family": "Outfit",
        }}
      >
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
