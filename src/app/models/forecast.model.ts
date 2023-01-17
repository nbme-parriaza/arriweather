export interface forecast {
    Date: string,
    Temperature: {
        Minimum: {
            Unit: string
            Value: number
        },
        Maximum: {
            Unit: string
            Value: number
        }
    }
}