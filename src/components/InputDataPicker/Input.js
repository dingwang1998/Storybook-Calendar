import React, { useContext} from 'react'
import DateContext from './DateContext'
import DebounceInput from 'react-debounce-input'


function Input(props) {
    const { value, onInputChange } = useContext(DateContext)
    return (
        <DebounceInput 
            value = {value.textInput} 
            onChange={onInputChange}
            debounceTimeout = {300}
            placeholder = "yyyy-mm-dd"
        >
        </DebounceInput>
    )
} 

Input.propTypes = {

}

export default Input

