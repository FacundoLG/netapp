import React from 'react'
import Button from './Button'
import Nav from './Nav'
function Header(){
    return(
        <div className="bgImg">
            <header>
                <div className="icon">
                    <h1>My Music</h1>
                </div>
                <div className="buttonsContainer">
                    <Button type="ghost" content="English"/>
                </div>
            </header>
            <Nav/>
        </div>
    )
}

export default Header