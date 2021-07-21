import React from "react";
import NavBarMenuItem from "./NavBarMenuItem";

class NavBarComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="NavBar shadow-sm">
                <h2>Gestion</h2>
                <NavBarMenuItem active={this.props.itemActive}/>
            </div>
        );

    }

}

export default NavBarComponent;