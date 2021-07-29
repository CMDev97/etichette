import React from "react";
import App from "../App";

class NavBarMenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }


    render() {
        return (
            <ul className="mt-3">
                <li onClick={this.handleOnClick} id="home" className={`Item ${(this.props.active === 'home') ? 'Active' :''} `}>Home</li>
                <li onClick={this.handleOnClick} id="vendita" className={`Item ${(this.props.active === 'vendita') ? 'Active' :''} `}>Vendita</li>
                <li onClick={this.handleOnClick} id="etichette" className={`Item ${(this.props.active === 'etichette') ? 'Active' :''} `}>Etichette</li>
                <li onClick={this.handleOnClick} id="prodotti" className={`Item ${(this.props.active === 'prodotti') ? 'Active' :''} `}>Prodotti</li>
                <li onClick={this.handleOnClick} id="settings" className={`Item ${(this.props.active === 'settings') ? 'Active' :''} `}>Impoostazioni</li>
            </ul>
        );
    }

}

export default NavBarMenuItem;