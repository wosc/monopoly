import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faUserTie} from "@fortawesome/free-solid-svg-icons";

export default class Go extends React.Component{

    render() {
        return (<div className={"go corner-card grid-area-0 " + this.props.boardPos}>
            <div className="container">
                <div>CREW PURSER</div>
                <div>Collect $200 salary as you pass</div>
                <div className="icon">
                    <FontAwesomeIcon icon={faArrowLeft}/>&nbsp;
                    <FontAwesomeIcon icon={faUserTie}/>
                </div>
            </div>
        </div>);
    }
}
