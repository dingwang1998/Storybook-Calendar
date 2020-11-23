import React, {useRef, useState,useEffect} from 'react'
import propTypes from 'prop-types'
import DateView from './DateView'
import MonthYearView from './MonthYearView'

import styled from 'styled-components';


import { neutral, spacing } from '../../utils'
import { getMonth, getYear, startOfDay } from 'date-fns';

const Picker = styled.div`
    width:29rem;
    height:35rem;
    padding: ${spacing.padding.normal};
    border: solid 0.1rem ${neutral[300]};
`

function Calendar(props) {
    const { selectedDate, onSelectDate } = props
    const [isDateView, setDateView] = useState(true)
    const calendarRef = useRef(null)
    const today = new Date()
    const initialCanlendar = {
        year: getYear(today),
        monthIndex: getMonth(today)
    }
    const [calendar, setCalendar] = useState(initialCanlendar)

    function onSelectMonth(selectMonthIndex){
        setCalendar({ ...calendar, monthIndex:selectMonthIndex})
    }

    function onSelectYear(selectedYear){
        setCalendar({ ...calendar, year: selectedYear})
    }

    function onClickToDay(e){
        onSelectDate(e, startOfDay(new Date()))
    }

 
    const onSetMonthYearView = setDateView.bind(null, false)
    const onSetDataView = setDateView.bind(null, true)
    useEffect(() => {
        calendarRef.current.focus()
    }, [isDateView])
    return (
        <Picker tabIndex={0} ref = {calendarRef}> 
            { isDateView ? 
                <DateView 
                    calendar = {calendar} 
                    onSelectMonthYear = {setCalendar}
                    onTitleClick = { onSetMonthYearView }
                    onSelectDate = { onSelectDate }
                    onClickToDay = {onClickToDay}
                    selectedDate = {selectedDate}
                /> 
                : <MonthYearView 
                    onSelectMonth = { onSelectMonth }
                    calendar = {calendar}
                    onBackClick = {onSetDataView}
                    onSelectYear = {onSelectYear}
                    onClickToDay = {onClickToDay} 
                    />
            }
        </Picker>
    )
}

Calendar.propTypes = {
    selectedDate: propTypes.instanceOf(Date),
    onSelectDate: propTypes.func,
}

export default Calendar

