import './stile/App.css';
import './stile/NavBar.css';

import NavBarComponent from "./component/NavBarComponent";
import React from "react";

import ViewEtichette from "./ViewEtichette";
import ViewHome from "./ViewHome";
import ViewProdotti from "./ViewProdotti";

class App extends React.Component {

    static singleton;

    constructor(props) {
        super(props);
        App.singleton = this;
        this.state = {
            itemActive : 'home'
        }

    }

    render() {
        let json = require('./dataMock/product.json');
        let view;
        switch (this.state.itemActive){
            case "home":
                view = <ViewHome/>;
                break;
            case "etichette":
                view = <ViewEtichette/>;
                break;
            case "prodotti":
                view = <ViewProdotti/>;
                break;
            default: view = '';
                break;
        }
        return (
            <div className="App">
                <NavBarComponent itemActive={this.state.itemActive}/>
                {view}
            </div>
        );
    }
}



export default App;
