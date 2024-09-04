import { useContext, useEffect, useState } from 'react'
import { AiOutlineWallet } from 'react-icons/ai'
import { CiMoneyBill } from 'react-icons/ci'
import { FaCalendarDay } from 'react-icons/fa'
import { FaCalendarWeek } from 'react-icons/fa'
import MobileNav from '../components/MobileNav'
import MobileSidebar from '../components/MobileSidebar'
import CardStat from '../components/CardStat'
import EarningsTable from '../components/EarningsTable'
import { Transaction } from '../@types'
import { Card } from '@tremor/react'
import { WalletContext } from '../context/WalletContext'
import { useParams } from 'react-router-dom'

const Earnings = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    const walletContext = useContext(WalletContext)
    const { address } = useParams<{ address: string }>()
    const walletAddress = address

    const dataOne: Transaction[] = [
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
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            amount: 98,
            link: 'inactive',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            amount: 98,
            link: '',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            amount: 98,
            link: 'inactive',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            amount: 98,
            link: 'inactive',
        },
        {
            transactionId:
                'e6a4c1838004bd11a26a9e61527ba05cc3dd9e61a84bd5217e7a997e1a944fd8',
            time: '08-11-2024',
            amount: 98,
            link: 'inactive',
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
                    <p className="text-lg">Earnings Report</p>
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
                        title="Total Earned (KAS)"
                        data="171876.2"
                        footer={'All time'}
                        icon={
                            <AiOutlineWallet className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Total Paid (KAS)"
                        data="427.875"
                        footer={'All time'}
                        icon={
                            <CiMoneyBill className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Daily Average"
                        data="432.11"
                        footer={'Last 7 days (KAS/day)'}
                        icon={
                            <FaCalendarDay className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Weekly Average"
                        data="3024.77"
                        footer={'Last 30 days (KAS/week)'}
                        icon={
                            <FaCalendarWeek className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                </div>
                <div className="mt-4">
                    <EarningsTable data={dataOne} />
                </div>
            </div>
        </div>
    )
}

export default Earnings
