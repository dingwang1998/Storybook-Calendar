import React from 'react'
import propTypes, { func } from 'prop-types'
import omit from 'lodash/omit'

function FocusManager(props) {
    let timeoutId;
    function onBlur(e){
        e.persist();
        timeoutId = setTimeout(()=>{
            props.onBlur(e)
        })
    }

    function onFocus(e){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        props.onFocus(e)
    }

    return (
        <div onFocus = {onFocus} onBlur = {onBlur} {...omit['onFocus','onBlur']}>
            {props.children}
        </div>
    )
}

FocusManager.propTypes = {
    onFocus: propTypes.func.isRequired,
    onBlur:propTypes.func.isRequired,
}

export default FocusManager

