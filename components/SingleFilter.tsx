import { useState } from 'react'

export default function SingleFilter(props) {


    function sendFilterValue() {
        props.getValue(props.category)
    }

    function setFilterActive() {
        props.setActive(props.index)
        sendFilterValue()
    }

    return(
        <li onClick={setFilterActive} className={props.active === props.index ? 'isActive' : ''}>{props.category}</li>
    )
}