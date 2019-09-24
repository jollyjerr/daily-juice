import React from 'react'
import Links from '../components/Links'
import Weather from '../components/Weather'

export default function Nav(props) {
    return (
        <div className="nav">
            <Links />
            <Weather weather={props.weather} />
        </div>
    )
}
