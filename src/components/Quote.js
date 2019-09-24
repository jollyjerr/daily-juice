import React from 'react'

export default function Quote(props) {
    let {quotes} = props

    return (
        <div className='footer-quote'>
            {props.sample(quotes)}
        </div>
    )
}
