import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices',
    headers: {
        'x-rapidapi-key': 'f061b5aed2msh845f4a7c5c1c83dp151aebjsn88a52b7640ee',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
})

export type QuoteType = {
    'QuoteId': number,
    'MinPrice': number,
    'Direct': boolean,
    'OutboundLeg': {
        'CarrierIds': number[],
        'OriginId': number,
        'DestinationId': number,
        'DepartureDate': string
    },
    'QuoteDateTime': string
}

export type CarrierType = {
    'CarrierId': number,
    'Name': string
}

type PlacesType = {
    'Name': string,
    'Type': string,
    'PlaceId': number,
    'IataCode': string,
    'SkyscannerCode': string,
    'CityName': string,
    'CityId': string,
    'CountryName': string
}

type CurrencyType = {
    'Code': string,
    'Symbol': string,
    'ThousandsSeparator': string,
    'DecimalSeparator': string,
    'SymbolOnLeft': boolean,
    'SpaceBetweenAmountAndSymbol': boolean,
    'RoundingCoefficient': number,
    'DecimalDigits': number
}

export type FlightsResponseType = {
    Quotes: QuoteType[],
    Carriers: CarrierType[],
    Places: PlacesType[],
    Currencies: CurrencyType[]
}

// 16 июня - 2 рейса

export const flightsApi = {
    async getTickets(date: string): Promise<FlightsResponseType> {
        const { data } = await instance.get<FlightsResponseType>(`/browsequotes/v1.0/RU/RUB/ru-RU/JFK-sky/SVO-sky/${date}`)
        return data
    }
}