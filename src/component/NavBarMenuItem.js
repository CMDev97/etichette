import React from "react";
import App from "../App";

class NavBarMenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(value){
        App.singleton.setState({itemActive : value.currentTarget.id})
    }

    render() {
        return (
            <ul>
                <li onClick={this.handleOnClick} id="home" className={`Item ${(this.props.active === 'home') ? 'Active' :''} `}>Home</li>
                <li onClick={this.handleOnClick} id="vendita" className={`Item ${(this.props.active === 'vendita') ? 'Active' :''} `}>Vendita</li>
                <li onClick={this.handleOnClick} id="etichette" className={`Item ${(this.props.active === 'etichette') ? 'Active' :''} `}>Etichette</li>
                <li onClick={this.handleOnClick} id="prodotti" className={`Item ${(this.props.active === 'prodotti') ? 'Active' :''} `}>Prodotti</li>
            </ul>
        );
    }

}

export default NavBarMenuItem;