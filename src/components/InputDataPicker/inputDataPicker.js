import React, { useState } from 'react'
import propTypes from 'prop-types'
import Calendar from './Calendar'
import DateManager from './DateManager'
import FocusManager from './FocusManager'
import Picker from './Picker'
import Input from './Input'

function InputDataPicker(props) {
    const [showPicker, setShowPicker] = useState(false)
    const openPicker = setShowPicker.bind(null,true)
    const closePicker = setShowPicker.bind(null,false)
    function onFocus(){
        openPicker()
    }
    function onBlur(){
        closePicker()
    }
    return (
        <FocusManager onFocus= {onFocus} onBlur={onBlur}>
            <DateManager onChange = {props.onChange}>
                <Input />
                {showPicker && <Picker/>}
            </DateManager>
        </FocusManager>
    )
}
InputDataPicker.propTypes = {
    onChange:propTypes.func
}

export default InputDataPicker

