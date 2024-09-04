import {
    Badge,
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
import { RiFlag2Line } from 'react-icons/ri'
import { Worker } from '../@types'

interface WorkerTableProps {
    data: Worker[]
}

const WorkerTable: React.FC<WorkerTableProps> = ({ data }) => {
    return (
        <Card>
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                Workers
            </h3>
            <div className="flex items-center">
                <BsFillCircleFill className="text-green-500 h-2 w-2 mr-2" />
                <p className="text-sm text-slate-400">
                    <span className="font-semibold">2 active</span> right now
                </p>
            </div>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Worker Name</TableHeaderCell>
                        <TableHeaderCell>Hashrate (15min)</TableHeaderCell>
                        <TableHeaderCell>Hashrate (1hr)</TableHeaderCell>
                        <TableHeaderCell>Hashrate (24hr)</TableHeaderCell>
                        <TableHeaderCell>Last Share</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(item => (
                        <TableRow key={item.name}>
                            <TableCell>
                                <Badge
                                    color={`${item.status === 'active' ? 'emerald' : 'red'}`}
                                    icon={RiFlag2Line}
                                >
                                    {item.status}
                                </Badge>
                            </TableCell>

                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.hashRateOne}</TableCell>
                            <TableCell>{item.hashRateTwo}</TableCell>
                            <TableCell>{item.hashRateThree}</TableCell>
                            <TableCell>{item.hashRateThree}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default WorkerTable
