import React from 'react'
import InputDataPicker from './inputDataPicker.js'
import { action } from '@storybook/addon-actions'

export default {
    title: "InpuTDataPicker",
};

export function Example(){
    return(
        <InputDataPicker onChange = {action('action')}></InputDataPicker>
    )
}



