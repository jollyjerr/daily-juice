import React from 'react'
import Photo from '../components/Photo'
import Quote from '../components/Quote'

export default function Footer(props) {
    let {image, quotes} = props


    return (
        <div className="footer">
            <Photo image={image} />
            <Quote quotes={quotes} sample={props.sample} />
        </div>
    )
}
