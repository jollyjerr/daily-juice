import React from 'react'
import Clock from 'react-live-clock'

export default function Main(props) {
    let {greetings} = props

    return (
        <div className="center">
            <Clock format={'HH:mm'} ticking={true} />
            <h2>{sample(greetings)}</h2>
        </div>
    )
}

function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)] 
}