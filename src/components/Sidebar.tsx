import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    AiOutlineDashboard,
    AiOutlineLineChart,
    AiOutlineSearch,
    AiOutlineWallet,
} from 'react-icons/ai'

const Sidebar = () => {
    const [walletAdd, setWalletAdd] = useState<string>('')
    const location = useLocation()

    return (
        <div className="hidden md:block w-[20%] shadow-lg h-screen px-4">
            {/* <div className="pt-4">
                <p className="text-4xl text-[#77c2b6]">KasPOOL</p>
            </div> */}
            <div className="py-4">
                <form className="flex flex-col items-start">
                    <input
                        type="text"
                        className="py-1 px-2 w-full rounded-md border-2 border-gray-400 outline-none bg-gray-200"
                        placeholder="Search by KAS wallet address"
                        onChange={e => setWalletAdd(e.target.value)}
                    />

                    <Link
                        to={`/miner/${walletAdd}/dashboard`}
                        className="flex items-center mt-2 rounded-md bg-[#77c2b6] py-2 text-white px-5 hover:bg-opacity-80 transition ease-in-out duration-200"
                    >
                        <AiOutlineSearch className="mr-1 h-6 w-6" />
                        <p>Search</p>
                    </Link>
                </form>
                <ul className="border-t-2 mt-4">
                    <li>
                        <Link
                            to={`/miner/kaspa:qyppkat8emnevrdtnu4hkkc6dmwj4xwmfh9ne3ncng49azgta7sg0ncrthn2erh/dashboard`}
                            className="flex items-center py-4"
                        >
                            <div
                                className={`flex p-2 ${location.pathname === `/miner/kaspa:qyppkat8emnevrdtnu4hkkc6dmwj4xwmfh9ne3ncng49azgta7sg0ncrthn2erh/dashboard` ? 'bg-[#77c2b6]' : 'bg-gray-200'} items-center justify-center rounded-md mr-4`}
                            >
                                <AiOutlineDashboard
                                    className={`h-6 w-6 ${location.pathname === `/miner/kaspa:qyppkat8emnevrdtnu4hkkc6dmwj4xwmfh9ne3ncng49azgta7sg0ncrthn2erh/dashboard` ? 'text-white' : 'text-black'}`}
                                />
                            </div>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/miner/kaspa:qyppkat8emnevrdtnu4hkkc6dmwj4xwmfh9ne3ncng49azgta7sg0ncrthn2erh/earnings`}
                            className="flex items-center py-4"
                        >
                            <div
                                className={`flex p-2 ${location.pathname === `/miner/kaspa:qyppkat8emnevrdtnu4hkkc6dmwj4xwmfh9ne3ncng49azgta7sg0ncrthn2erh/earnings` ? 'bg-[#77c2b6]' : 'bg-gray-200'} items-center justify-center rounded-md mr-4`}
                            >
                                <AiOutlineLineChart
                                    className={`h-6 w-6 ${location.pathname === `/miner/kaspa:qyppkat8emnevrdtnu4hkkc6dmwj4xwmfh9ne3ncng49azgta7sg0ncrthn2erh/earnings` ? 'text-white' : 'text-black'}`}
                                />
                            </div>
                            <p>Earnings</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/miner/kaspa:qyppkat8emnevrdtnu4hkkc6dmwj4xwmfh9ne3ncng49azgta7sg0ncrthn2erh/rewards`}
                            className="flex items-center py-4"
                        >
                            <div
                                className={`flex p-2 ${location.pathname === `/miner/kaspa:qyppkat8emnevrdtnu4hkkc6dmwj4xwmfh9ne3ncng49azgta7sg0ncrthn2erh/rewards` ? 'bg-[#77c2b6]' : 'bg-gray-200'} items-center justify-center rounded-md mr-4`}
                            >
                                <AiOutlineWallet
                                    className={`h-6 w-6 ${location.pathname === `/miner/kaspa:qyppkat8emnevrdtnu4hkkc6dmwj4xwmfh9ne3ncng49azgta7sg0ncrthn2erh/rewards` ? 'text-white' : 'text-black'}`}
                                />
                            </div>
                            <p>Rewards</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
