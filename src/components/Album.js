import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlay } from '@fortawesome/free-solid-svg-icons'
import {  faStop } from '@fortawesome/free-solid-svg-icons'
import {  faBackward } from '@fortawesome/free-solid-svg-icons'
const  Album = (props) =>{
    return(
        <div className="albumContainer">
            <h3 className="albumName">{props.albumName} <span className="artist">"{props.artist}"</span></h3>
            <div className="album">
                <div>
                    <img src={props.imgSrc} alt="" className="songImg"/>
                    <div className="soundControler">
                            <FontAwesomeIcon className="control" icon={faPlay}/>
                            <h4>songName</h4>
                            <div>
                                <FontAwesomeIcon className="control" icon={faBackward}/>
                                <FontAwesomeIcon className="control" icon={faStop}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Album