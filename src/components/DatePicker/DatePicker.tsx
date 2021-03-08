import React, { FC, ReactElement, useState } from 'react'
import { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import ru from 'date-fns/locale/ru'
import ReactDatePicker from 'react-datepicker'
import { useDispatch } from 'react-redux'
import { flightsActions } from '../../store/ducks/flights/flights'

const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`

const DatePickerStyled = styled(ReactDatePicker)`
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 600;
  text-align: right;
  font-size: 25px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: ${props => props.theme.primaryColor};
  width: 222px;
  margin-right: 15px;

  &:disabled {
    background: transparent;
  }
`

registerLocale('ru', ru)

const DatePicker: FC = (): ReactElement => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const dispatch = useDispatch()

    const [date, setDate] = useState(new Date())

    const handleDateChange = (date: Date) => {
        setDate(date)
        const stringDate = date.toISOString().substr(0, 10)
        dispatch(flightsActions.setDate(stringDate))
    }

    return (
        <DatePickerWrapper>
            <DatePickerStyled
                selected={date}
                onChange={(date: Date) => handleDateChange(date)}
                locale="ru"
                minDate={new Date()}
                dateFormat="dd MMMM yyyy"
                open={isVisible}
                onClickOutside={() => setIsVisible(false)}
                onSelect={() => {
                    setIsVisible(false)
                }}
                disabled
                todayButton="Сегодня"
            />
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 onClick={() => setIsVisible(true)}>
                <path
                    d="M18 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H18C19.1046 22 20 21.1046 20 20V6C20 4.89543 19.1046 4 18 4Z"
                    stroke="#1157A7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 2V6" stroke="#1157A7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 2V6" stroke="#1157A7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 10H20" stroke="#1157A7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </DatePickerWrapper>
    )
}

export default DatePicker