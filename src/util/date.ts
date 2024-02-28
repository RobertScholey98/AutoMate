type DateDiffParams = {
    startDate: number,
    endDate: number
}

const datediff = (startDate: Date, endDate: Date): number => {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.round((diffTime) / (1000 * 60 * 60 * 24));
}

export default datediff;