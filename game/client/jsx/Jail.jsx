import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserInjured} from "@fortawesome/free-solid-svg-icons";

export default class Jail extends React.Component {

    render() {
        return (<div className={"jail grid-area-10 corner-card "}>
            <div className="cell">
                <FontAwesomeIcon icon={faUserInjured}/>
            </div>
            <div className="visit-left">Just</div>
            <div className="visit-bottom">visiting</div>
            <div style={{gridArea: 'e'}}></div>
        </div>);
    }
}
