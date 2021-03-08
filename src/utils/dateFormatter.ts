import ru from 'date-fns/locale/ru'
import { formatDistance } from 'date-fns'

export const dateFormatter = (date: Date): string => {
    return formatDistance(
        date,
        new Date(),
        { locale: ru }
    )
}

export const flightDepartureTime = (str: string): string => {
    return new Date(str).toLocaleTimeString().split(':')[0] + ':' + new Date(str).toLocaleTimeString().split(':')[1]
}

export const flightDepartureDate = (str: string): string => {
    return new Date(str).getDate() + ' ' + new Date(str).toLocaleDateString('en-EN', { month: "long" }) + ', ' + new Date(str).getFullYear()
}