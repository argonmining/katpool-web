import React from 'react'
import {
    AiOutlineDashboard,
    AiOutlineLineChart,
    AiOutlineWallet,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface MobileSidebarProps {
    isOpen: boolean
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen }) => {
    return (
        <div
            className={`absolute z-20 bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden w-full shadow-lg px-4`}
            style={{ height: 'calc(100vh - 60px)' }}
        >
            <div className="py-4">
                <ul className="border-t-2">
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

export default MobileSidebar
