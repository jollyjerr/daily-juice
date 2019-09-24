import React from 'react'
import Photo from '../components/Photo'
import Quote from '../components/Quote'
import Todo from '../components/Todo'

export default function Footer(props) {
    let {image, quotes} = props


    return (
        <div className="footer">
            <Photo image={image} />
            <Quote quotes={quotes} sample={props.sample} />
            <Todo />
        </div>
    )
}
