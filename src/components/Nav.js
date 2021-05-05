import React from 'react'
import Button from './Button'
function Nav(){
    return(
        <div className="container">
            <p className="welcome">
                Hi, here you will find music that i like
            </p>
            <p className="inputComent">
                Here you can filter by name or kind
            </p>
            <div className="inputGroup">
                <input className="searchInput" placeholder="Not implemented" type="text"/>
                <Button type="yellow" content="Search"/>
            </div>
        </div>
    )
}

export default Nav