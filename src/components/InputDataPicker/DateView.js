import React from 'react'
import propTypes from 'prop-types'
import { TertiaryButton, TertiaryIconButton } from '../Button'
import DataPicker from './DataPicker'

import ViewLayout from './ViewLayout'
import HeaderTitle from './HeaderTitle'



function modulo(m, n){
    return ((m % n) + n) % n;
}

function DateView(props) {
    const { 
        calendar, 
        onSelectMonthYear, 
        onTitleClick,
        selectedDate, 
        onSelectDate,
        onClickToDay
    } = props;
    const { monthIndex, year} = calendar

    function incrementMonthIndex(increment) {
        const incrementMonthIndex = modulo(monthIndex + increment, 12);
        const incrementYear = year + Math.floor((monthIndex + increment) / 12)
        onSelectMonthYear({
            year:incrementYear,
            monthIndex: incrementMonthIndex
        })
    }
    const goToPreviousMonth = incrementMonthIndex.bind(null, -1)
    const goToNextMonth = incrementMonthIndex.bind(null, 1)
    return (
        <ViewLayout
            header ={{
                leftElement:<TertiaryIconButton icon = "arrowleft" onClick = {goToPreviousMonth}/>,
                middleElement:<HeaderTitle year= {year} monthIndex = {monthIndex} onTitleClick = {onTitleClick}></HeaderTitle>,
                rightElement: <TertiaryIconButton icon = "arrowright" onClick = {goToNextMonth}/>
            }}
            bodyElement = {<DataPicker calendar={calendar} selectedDate = {selectedDate} onSelectDate={onSelectDate}></DataPicker>}
            footerElement = {<TertiaryButton onClick={onClickToDay}>Today</TertiaryButton>}
        ></ViewLayout>
    )
}

DateView.propTypes = {
    calendar: DataPicker.propTypes.calendar,
    onSelectMonthYear: propTypes.func,
    onTitleClick:propTypes.func,
    selectedDate: propTypes.instanceOf(Date),
    onSelectDate: propTypes.func,
    onClickToDay: propTypes.func,
}

export default DateView

