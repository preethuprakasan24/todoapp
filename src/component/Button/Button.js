import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button className={props.className} id={props.Id} onClick={props.onClick}>{props.children}</button>
        </div >
    )
}

export default Button