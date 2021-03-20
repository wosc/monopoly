import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign} from "@fortawesome/free-solid-svg-icons";

export default class FreeParking extends React.Component {

    render() {
        return (<div className={"free-parking corner-card  grid-area-20 " + this.props.boardPos}>
            <div className="container">
                <div>Pay</div>
                <div className="icon">
                    <FontAwesomeIcon icon={faDollarSign}/>
                </div>
                <div>Day</div>
            </div>
        </div>);
    }
}
