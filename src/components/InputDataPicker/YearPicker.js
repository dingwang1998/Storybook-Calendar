import React, {useState} from 'react'
import propTypes from 'prop-types'
import { buildYears } from './generator'
import { TertiaryIconButton,TertiaryButton } from '../Button'
import styled from 'styled-components'

const YearPickerContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ScrollIconButton = styled(TertiaryIconButton)`
    width:100%;
`

const YearList = styled.ul`
    list-style:none;
    padding:0;
`

function YearPicker(props) {
    const { selectedYear,onSelectYear } = props
    const [yearWindow, setyearWindow] = useState(buildYears(selectedYear, 3))
    function getMiddleYear(){
        return yearWindow[Math.floor(yearWindow.length / 2)]
    }
    function scroll(pace){
        setyearWindow(buildYears( getMiddleYear() + pace, 3))
    }
    function onScrollUp(e){
        e.stopPropagation();
        scroll(-1)
    }
    function onScrollDown(e){
        e.stopPropagation();
        scroll(1)
    }
    function onwheel(e){
        e.preventDefault();
        const { daltaY } = e
        console.log(daltaY)
        const absolutePath = Math.round(Math.log(Math.abs(daltaY)))
        let pace = daltaY > 0 ? 1 : -1;
        
        if(absolutePath > 5){
            pace = pace * ( absolutePath /2 )
        }
        scroll(pace)
    }
    return (
        <YearPickerContainer onWheel = {onwheel}>
            <ScrollIconButton icon= "arrowup" onClick = {onScrollUp}/>
                <YearList>
                    {yearWindow.map((year, i)=><li key={i}><TertiaryButton modifiers={"small"} onClick = {()=>{onSelectYear(year)}}>{year}</TertiaryButton></li>)}
                </YearList>
            <ScrollIconButton icon= "arrowdown" onClick = {onScrollDown}/>
        </YearPickerContainer>
    )
}




YearPicker.propTypes = {
    selectedYear:propTypes.number,
    onSelectYear:propTypes.func
}

export default YearPicker

