import React from 'react'

export default function Weather(props) {
    return (
        <div className="nav-weather">
            <p> {props.weather.temperature} </p>
            <p> {props.weather.location} </p>
        </div>
    )
}
