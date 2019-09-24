import React from 'react'

export default function Links() {
    return (
        <div className="nav-links">
             🔍
            <form onSubmit={(event) => search(event)} className="search">
               <input className="search" type="text"/> 
            </form>
        </div>
    )
}

const search = (event) => {
    event.persist()
    event.preventDefault()
    window.location.replace(`https://google.com/search?q=${event.target.children[0].value}`)
}
