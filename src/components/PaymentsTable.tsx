import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react'
import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Transaction } from '../@types'

interface PaymentsTableProps {
    data: Transaction[]
}

const PaymentsTable: React.FC<PaymentsTableProps> = ({ data }) => {
    return (
        <Card>
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                Recent Payments
            </h3>
            <div className="flex items-center">
                <BsFillCircleFill className="text-green-500 h-2 w-2 mr-2" />
                <p className="text-sm text-slate-400">
                    <span className="font-semibold">Last 24</span> hours
                </p>
            </div>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Time</TableHeaderCell>
                        <TableHeaderCell>Transaction ID</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(item => (
                        <TableRow key={item.transactionId}>
                            <TableCell>{item.time}</TableCell>
                            <TableCell>
                                {item.transactionId.slice(7, 20) + `...`}
                            </TableCell>
                            <TableCell className="hover:cursor-pointer">
                                <a href={`${item.link}`}>
                                    <FaExternalLinkAlt className="text-emerald-500" />
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default PaymentsTable
