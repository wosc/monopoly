import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";

export default class SuperTax extends React.Component{

    render() {
        return (<div className={"super-tax grid-area-"+this.props.position+" board-card " + this.props.boardPos}>
            <div className="title">AIDA SHOP</div>
            <div className="icon">
                <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            <div className="price">Pay $200</div>
        </div>);
    }
}
