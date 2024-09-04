import { AreaChart, Card } from '@tremor/react'

const chartdata = [
    {
        date: 'Jan 6',
        hashrate: 39,
    },
    {
        date: 'Jan 7',
        hashrate: 34,
    },
    {
        date: 'Jan 8',
        hashrate: 29,
    },
    {
        date: 'Jan 9',
        hashrate: 26,
    },
    {
        date: 'Jan 10',
        hashrate: 28,
    },
    {
        date: 'Jan 11',
        hashrate: 24,
    },
    {
        date: 'Jan 12',
        hashrate: 27,
    },
    {
        date: 'Jan 13',
        hashrate: 36,
    },
    {
        date: 'Jan 14',
        hashrate: 20,
    },
    {
        date: 'Jan 15',
        hashrate: 20,
    },
    {
        date: 'Jan 16',
        hashrate: 39,
    },
    {
        date: 'Jan 17',
        hashrate: 34,
    },
    {
        date: 'Jan 18',
        hashrate: 29,
    },
    {
        date: 'Jan 19',
        hashrate: 26,
    },
    {
        date: 'Jan 20',
        hashrate: 28,
    },
    {
        date: 'Jan 21',
        hashrate: 24,
    },
    {
        date: 'Jan 22',
        hashrate: 27,
    },
    {
        date: 'Jan 23',
        hashrate: 36,
    },
    {
        date: 'Jan 24',
        hashrate: 20,
    },
    {
        date: 'Jan 25',
        hashrate: 20,
    },
    {
        date: 'Jan 26',
        hashrate: 39,
    },
    {
        date: 'Jan 27',
        hashrate: 34,
    },
    {
        date: 'Jan 28',
        hashrate: 29,
    },
    {
        date: 'Jan 29',
        hashrate: 26,
    },
    {
        date: 'Jan 30',
        hashrate: 28,
    },
    {
        date: 'Jan 31',
        hashrate: 24,
    },
    {
        date: 'Feb 1',
        hashrate: 24,
    },
    {
        date: 'Feb 2',
        hashrate: 27,
    },
    {
        date: 'Feb 3',
        hashrate: 36,
    },
    {
        date: 'Feb 4',
        hashrate: 20,
    },
    {
        date: 'Feb 5',
        hashrate: 20,
    },
]

const valueFormatter = function (number) {
    return new Intl.NumberFormat('us').format(number).toString()
}

const Chart = () => {
    return (
        <Card>
            <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Miner Hashrate
            </h3>
            <AreaChart
                className="mt-4 h-72 md:hidden"
                data={chartdata}
                index="date"
                yAxisWidth={25}
                categories={['hashrate']}
                colors={['indigo']}
                valueFormatter={valueFormatter}
            />
            <AreaChart
                className="mt-4 h-72 hidden md:block"
                data={chartdata}
                index="date"
                yAxisWidth={65}
                categories={['hashrate']}
                colors={['indigo']}
                valueFormatter={valueFormatter}
            />
        </Card>
    )
}

export default Chart
