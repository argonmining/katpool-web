import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaCheckSquare } from 'react-icons/fa'
import { AiOutlineWallet } from 'react-icons/ai'
import { Block } from '../@types'
import { Card } from '@tremor/react'
import MobileNav from '../components/MobileNav'
import MobileSidebar from '../components/MobileSidebar'
import CardStat from '../components/CardStat'
import RewardsTable from '../components/RewardsTable'
import { WalletContext } from '../context/WalletContext'

const Rewards = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    const walletContext = useContext(WalletContext)
    const { address } = useParams<{ address: string }>()
    const walletAddress = address

    const dataOne: Block[] = [
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            lastShare: '87657890',
            blockNumber: 9876549,
            link: '',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            lastShare: '87657890',
            blockNumber: 9876549,
            link: '',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            lastShare: '87657890',
            blockNumber: 9876549,
            link: 've',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            lastShare: '87657890',
            blockNumber: 9876549,
            link: '',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            lastShare: '87657890',
            blockNumber: 9876549,
            link: 've',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            lastShare: '87657890',
            blockNumber: 9876549,
            link: 've',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            lastShare: '87657890',
            blockNumber: 9876549,
            link: 've',
        },
    ]

    useEffect(() => {
        if (walletAddress && walletContext) {
            walletContext.setWalletAddress(walletAddress)
        }
    }, [walletAddress, walletContext])

    return (
        <div className="relative w-full md:w-[80%] bg-gray-100 h-screen overflow-y-scroll">
            <MobileNav toogleSidebar={toogleSidebar} />
            <MobileSidebar isOpen={isSidebarOpen} />

            <div className="p-4">
                <Card className="mb-4 flex items-center">
                    <p className="text-lg">Rewards History</p>
                    <div className="px-4 py-2 rounded-full flex border-2 border-[#9fdfd4] items-center ml-auto">
                        <img
                            src="../assets/kas.png"
                            alt="kas"
                            className="h-8 w-8 mr-2"
                        />
                        <p className="text-semibold">
                            {walletAddress?.split(':')[1].slice(0, 7) +
                                '...' +
                                walletAddress
                                    ?.split(':')[1]
                                    .slice(
                                        walletAddress.length - 10,
                                        walletAddress.length,
                                    )}
                        </p>
                    </div>
                </Card>
                <div className="grid gap-4 md:grid-cols-2">
                    <CardStat
                        title="Total Shares Accepted"
                        data="8976897512947"
                        footer={'Last updated: 1 min ago'}
                        icon={
                            <FaCheckSquare className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Total Blocks Paid"
                        data="1789000"
                        footer={'Last updated: 1 min ago'}
                        icon={
                            <AiOutlineWallet className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                </div>
                <div className="mt-4">
                    <RewardsTable data={dataOne} />
                </div>
            </div>
        </div>
    )
}

export default Rewards
