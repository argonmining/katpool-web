import { Card } from '@tremor/react'
import React, { ReactElement } from 'react'

interface CardStatProps {
    title: string
    data: string
    footer: string
    icon: ReactElement
}

const CardStat: React.FC<CardStatProps> = ({ title, data, footer, icon }) => {
    return (
        <Card className="mx-auto rounded-md shadow-lg flex items-center">
            <div>
                <p className="text-sm text-slate-400">{title}</p>
                <p className="text-3xl font-extrabold text-[#308274] mt-1">
                    {data}
                </p>
                <p className={`text-xs text-slate-400`}>{footer}</p>
            </div>
            {icon}
        </Card>
    )
}

export default CardStat
