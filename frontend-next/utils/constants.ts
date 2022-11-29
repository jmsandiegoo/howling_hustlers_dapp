// Wallet Connect Constants
export const walletConnectID: string = "dc255dfaa827a157d5c420e0b352f339";
export const walletConnectChains: string[] = ["eip155:1"];
export const walletNamespaces = {
    eip155: { methods: ['eth_sign'], chains: ['eip155:1'], events: ['accountsChanged'] }
};

// Infura
export const infuraID: string = "835e4a520b7e4fa8b06d68ffc1b1cc96";