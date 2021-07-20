import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CardItemMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Card">
                <FontAwesomeIcon icon={["fas", "coffee"]} />
                <h2>title</h2>
            </div>
        );
    }

}

export default CardItemMenu;