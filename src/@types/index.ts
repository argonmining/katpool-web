export type Worker = {
    name: string
    hashRateOne: string
    hashRateTwo: string
    hashRateThree: string
    status: string
}

export type Transaction = {
    transactionId: string
    time: string
    amount: number
    link: string
}

export type Block = {
    transactionId: string
    time: string
    blockNumber: number
    lastShare: string
    link: string
}
