import React, { useState } from 'react'
import propTypes from 'prop-types'

import DateContext from './DateContext'
import { dateToStr, strToDate } from './date-extraction'

function DateManager(props) {
    //date textInput 
    const [state, setState] = useState({date:null, textInput:""})
    function onSelectDate(e, date){
        //更新state (date, textInput)
        const nextState = {
            date,
            textInput:dateToStr(date),
        }
        setState(nextState)
        //调用外部的onchange函数。
        if(props.onChange){
            props.onChange(e, nextState)
        }
    }

    function onInputChange(e){
        //更新state
        const textInput = e.target.value;
        let errors = [];
        let date = null;
        if(textInput){
            try {
                date = strToDate(textInput)
            } catch (parseErrors) {
                errors = parseErrors;
            }
        }
        const nextState = {
            textInput,
            date,
        }
        setState(nextState)
        //调用外部的onChange函数
        if(props.onChange){
            props.onChange(e, {...nextState, errors})
        }
    }
    return (
        <DateContext.Provider
            value={
                {
                    value:state,
                    onSelectDate,
                    onInputChange
                }
            }
        >
            {
                props.children
            }
        </DateContext.Provider>
    )
}

DateManager.propTypes = {

}

export default DateManager


