import React from 'react'
import Clock from 'react-live-clock'

export default function Main(props) {
    let {greetings} = props
    let contents = greetings.map(greeting => {
        return greeting.content
    })

    return (
        <div className="center">
            <Clock format={'h:mm'} ticking={true} className="clock" />
            <h2 className="message">{props.sample(contents)}</h2>
        </div>
    )
}
