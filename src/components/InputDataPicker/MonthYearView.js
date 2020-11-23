import React from 'react'
import propTypes from 'prop-types'
import ViewLayout from './ViewLayout'
import MonthPicker from './MonthPicker'
import HeaderTitle from './HeaderTitle'
import { TertiaryButton,TertiaryIconButton } from '../Button'





function MonthYearView(props) {
    const { calendar, onSelectMonth, onBackClick,onSelectYear,onClickToDay } = props
    const { monthIndex , year} = calendar
    return (
        <ViewLayout
            header={{
                leftElement:<TertiaryIconButton icon = "arrowleft" onClick = {onBackClick}/>,
                middleElement: <HeaderTitle {...calendar} onSelectYear = {onSelectYear}/>
            }}
            bodyElement={
                <MonthPicker 
                    selectedMonthIndex = {monthIndex}
                    onSelectMonth = { onSelectMonth }
                />}
            footerElement={<TertiaryButton  onClick={onClickToDay}>tody</TertiaryButton>}
        >
        </ViewLayout>
    )
}

MonthYearView.propTypes = {
    calendar:propTypes.shape({
        year:propTypes.number,
        monthIndex:propTypes.number
    }),
    onSelectMonth: propTypes.func,
    onBackClick:propTypes.func,
    onSelectYear:propTypes.func,
    onClickToDay:propTypes.func,
}

export default MonthYearView

