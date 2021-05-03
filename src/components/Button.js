import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Button = (props) => {
    return(
        <button className={props.type}>
            {props.content}
            {props.type === "ghost"? <FontAwesomeIcon className="font" icon={faCaretDown}/> : null}
        </button>
    )
}

export default Button