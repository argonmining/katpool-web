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
import { Block } from '../@types'

interface RewardsTableProps {
    data: Block[]
}

const RewardsTable: React.FC<RewardsTableProps> = ({ data }) => {
    return (
        <Card>
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                Block Rewards
            </h3>
            <div className="flex items-center">
                <BsFillCircleFill className="text-green-500 h-2 w-2 mr-2" />
                <p className="text-sm text-slate-400">
                    <span className="font-semibold">34</span> total payments
                </p>
            </div>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Time</TableHeaderCell>
                        <TableHeaderCell>Transaction ID</TableHeaderCell>
                        <TableHeaderCell>Block Number</TableHeaderCell>
                        <TableHeaderCell>Last Share</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(item => (
                        <TableRow key={item.transactionId}>
                            <TableCell>{item.time}</TableCell>
                            <TableCell>{item.transactionId}</TableCell>
                            <TableCell>{item.blockNumber}</TableCell>
                            <TableCell>{item.lastShare}</TableCell>
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

export default RewardsTable
