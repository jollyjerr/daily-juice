import React from 'react'

export default function Photo(props) {

    return (
        <div className="footer-photo">
            <p> {props.image.photographer} </p>
            <p> {props.image.location} </p>
        </div>
    )
}
