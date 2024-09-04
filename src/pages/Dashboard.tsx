import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosGlobe } from 'react-icons/io'
import { GiMining } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { Card } from '@tremor/react'
import MobileNav from '../components/MobileNav'
import MobileSidebar from '../components/MobileSidebar'
import CardStat from '../components/CardStat'
import WorkerTable from '../components/WorkerTable'
import { Worker, Transaction } from '../@types'
import Chart from '../components/Chart'
import PaymentsTable from '../components/PaymentsTable'
import { WalletContext } from '../context/WalletContext'

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    const walletContext = useContext(WalletContext)
    const { address } = useParams<{ address: string }>()
    const walletAddress = address

    const dataOne: Worker[] = [
        {
            name: 'Viola Amherd',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'active',
        },
        {
            name: 'Albert Rösti',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'active',
        },
        {
            name: 'Beat Jans',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'inactive',
        },
        {
            name: 'Ignazio Cassis',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '11 TH/s',
            status: 'inactive',
        },
        {
            name: 'Karin Keller-Sutter',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'inactive',
        },
        {
            name: 'Guy Parmelin',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '7 TH/s',
            status: 'inactive',
        },
        {
            name: 'Elisabeth Baume-Schneider',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'inactive',
        },
    ]

    const dataTwo: Transaction[] = [
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            amount: 98,
            link: 'active',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            amount: 98,
            link: 'active',
        },
    ]

    useEffect(() => {
        if (walletAddress && walletContext) {
            walletContext.setWalletAddress(walletAddress)
        }
    }, [walletAddress, walletContext])

    if (!walletAddress && walletContext) return <div>Loading</div>
    console.log(walletAddress)
    return (
        <div className="relative w-full md:w-[80%] bg-gray-100 h-screen overflow-y-scroll">
            <MobileNav toogleSidebar={toogleSidebar} />
            <MobileSidebar isOpen={isSidebarOpen} />
            <div className="p-4">
                <Card className="mb-4 flex items-center">
                    <p className="text-lg">Miner Dashboard</p>
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
                <div className="grid gap-4 md:grid-cols-4">
                    <CardStat
                        title="Network Hashrate"
                        data="523 PH/s"
                        footer={'Last updated: 1 min ago'}
                        icon={
                            <IoIosGlobe className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Your Hashrate (48h)"
                        data="270 TH/s"
                        footer={'Last updated: 1 min ago'}
                        icon={
                            <GiMining className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Pool Hashrate"
                        data="2.3 PH/s"
                        footer={'Last updated: 1 min ago'}
                        icon={
                            <FaUsers className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Pending Balance"
                        data="380 KAS"
                        footer={'Last updated: 1 min ago'}
                        icon={
                            <AiOutlineClockCircle className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Chart />
                    <PaymentsTable data={dataTwo} />
                </div>
                <div className="mt-4">
                    <WorkerTable data={dataOne} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
