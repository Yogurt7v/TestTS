export type Meters = {
    id: string,
    _type: string | string[],
    area: {
        id: string
    }
    is_automatic: string | null,
    communication: string,
    description: string,
    serial_number: string,
    installation_date: string,
    brand_name: string | null,
    model_name: string | null,
    initial_values: number[]
}

export type MeterStatus = "pending" | "fulfilled" | "rejected";

export type Address = {

    id: string,
    number: number,
    str_number: string,
    str_number_full: string,
    house: {
        address: string,
        id: string,
        fias_addrobjs: string[]
    } | undefined,
}


export type FullMeters = {
    id: string,
    _type: string | string[],
    address: Address | undefined,
    area: {
        id: string
    }
    is_automatic: string | null,
    communication: string,
    description: string,
    serial_number: string,
    installation_date: string,
    brand_name: string | null,
    model_name: string | null,
    initial_values: number[]
}
