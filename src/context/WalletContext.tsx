import React, { createContext, useState } from 'react'

interface WalletContextType {
    walletAddress: string | null
    setWalletAddress: (address: string) => void
}

export const WalletContext = createContext<WalletContextType | undefined>(
    undefined,
)

const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null)
    return (
        <WalletContext.Provider value={{ walletAddress, setWalletAddress }}>
            {children}
        </WalletContext.Provider>
    )
}

export default WalletProvider
