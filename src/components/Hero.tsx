import { useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    const [walletAdd, setWalletAdd] = useState<string>('')
    return (
        <div className="h-[90vh] bg-[#308274] text-white">
            <div className="px-8 max-w-2xl py-8">
                <div className="px-4 py-2 rounded-full inline-block text-white border-2 border-[#9fdfd4] mt-14">
                    <p className="text-semibold">
                        Premier Mining Pool for Kaspa
                    </p>
                </div>
                <p className="text-6xl font-bold hero-text my-6 md:my-4">
                    Welcome to KasPool
                </p>
                <p className="max-w-xs md:max-w-lg">
                    Join the most reliable and efficient mining pool dedicated
                    to Kaspa. Kaspool offers you the best mining experience with
                    optimized performance, low fees, and instant payouts.
                    Maximize your earnings and be part of a thriving mining
                    community.
                </p>
                <div className="flex items-center mt-6 max-w-xs md:max-w-lg bg-white rounded-full">
                    <input
                        type="text"
                        className="hidden md:inline border-none px-5 py-3 rounded-full w-[65%] text-black outline-none focus:ring-0"
                        placeholder="Please enter your KAS wallet address"
                        onChange={e => setWalletAdd(e.target.value)}
                    />
                    <input
                        type="text"
                        className="md:hidden px-3 py-3 rounded-full text-black outline-none"
                        placeholder="Enter your KAS wallet address"
                        onChange={e => setWalletAdd(e.target.value)}
                    />
                    <Link
                        to={`/miner/${walletAdd}/dashboard`}
                        className="rounded-full bg-[#77c2b6] py-3 text-white px-5 hover:bg-opacity-80 transition ease-in-out duration-200 ml-auto"
                    >
                        Search
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
