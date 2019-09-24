import React from 'react'
import Clock from 'react-live-clock'

export default function Main(props) {
    let {greetings} = props

    return (
        <div className="center">
            <Clock format={'HH:mm'} ticking={true} />
            <h2>{greetings[0]}</h2>
        </div>
    )
}