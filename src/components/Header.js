import React from 'react'
import Button from './Button'
function Header(){
    return(
        <div className="bgImg">
            <header>
                <div className="icon">
                    <h1>Neflicx</h1>
                </div>
                <div className="buttonsContainer">
                    <Button type="ghost" content="Language"/>
                    <Button type="red" content="Register"/>
                </div>
            </header>
        </div>
    )
}

export default Header