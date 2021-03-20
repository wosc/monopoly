import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointer} from '@fortawesome/free-solid-svg-icons';

export default class GoToJail extends React.Component {

    render() {
        return (<div className={"go-to-jail corner-card  grid-area-30"}>
            <div className="container">
                <div>Go To</div>
                <div className="icon">
                    <FontAwesomeIcon icon={faHandPointer}/>
                </div>
                <div>Isolation</div>
            </div>
        </div>);
    }
}
