import React from 'react'
import propTypes from 'prop-types'

import { TertiaryButton} from '../Button'
import DropdownButton from '../DropdownButton'
import format from 'date-fns/format'
import YearPicker from './YearPicker';
import styled from 'styled-components'

import { spacing } from '../../utils'

const HeaderTitleContainer = styled.div`
    display:flex;
    align-items:center;
`

const MonthLabel = styled.span`
    margin-right:${spacing.padding.small};
` 


function HeaderTitle(props) {
    const { year, monthIndex,onTitleClick, onSelectYear} = props;
    const firstDayMonth = new Date(year, monthIndex);
    const monthLabel = format(firstDayMonth, 'MMMM');
    const yearLabel = format(firstDayMonth, 'yyyy');
    if(onSelectYear){
        return (
            <HeaderTitleContainer>
                <MonthLabel>{monthLabel}</MonthLabel>
                <DropdownButton title={yearLabel}>
                    <YearPicker selectedYear={year} onSelectYear = {onSelectYear}></YearPicker>
                </DropdownButton>
            </HeaderTitleContainer>
        );
    }
    return (
        <div>
            <TertiaryButton modifiers ={["small"]} onClick = {onTitleClick}>
                {monthLabel}{yearLabel}
            </TertiaryButton>
        </div>
    )
}

HeaderTitle.propTypes = {
    year: propTypes.number,
    monthIndex:propTypes.number,
    onTitleClick:propTypes.func,
    onSelectYear:propTypes.func
}
export default HeaderTitle

