import { Env } from "@/config/env";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Get projectId
const projectId = Env.WEB3_API_ID;

// 2. Set chains
const testnet = {
  chainId: 97,
  name: "Smart Chain - Testnet",
  currency: "tBNB",
  explorerUrl: "https://testnet.bscscan.com",
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};
const mainnet = {
  chainId: 56,
  name: "Binance Smart Chain Mainnet",
  currency: "BNB",
  explorerUrl: "https://bscscan.com",
  rpcUrl: "https://bsc-dataseed.binance.org",
};

// 3. Create modal
const metadata = {
  name: "Oscar Herrera NFT",
  description: "My Website description",
  url: "https://oscarherrera.tech",
  icons: ["https://oscarherrera.tech"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, testnet],
  projectId,
  enableAnalytics: true,
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  ],
  termsConditionsUrl: "https://mywebsite.com/terms",
  includeWalletIds: ["MetaMask"],
  customWallets: [],
  privacyPolicyUrl: "https://mywebsite.com/privacy",
  chainImages: [""],
  themeMode: "dark",
  themeVariables: {
    "--w3m-color-mix": "#6366f1",
    "--w3m-color-mix-strength": 40,
    "--w3m-accent": "#6366f1",
  },
});

export default function InitConnect() {
  return (
    <div className="absolute top-0 right-0 -z-50 bg-red-500">InitConnect</div>
  );
}
