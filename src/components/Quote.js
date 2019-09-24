import React from 'react'

export default function Quote(props) {
    let {quotes} = props
    let contents = quotes.map(quote => {
        return quote.content
    })

    return (
        <div >
            <p className='footer-quote'>{props.sample(contents)}</p>
        </div>
    )
}
