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
                    <Button type="ghost" content="English"/>
                    <Button type="red" content="Sign In"/>
                </div>
            </header>
        </div>
    )
}

export default Header