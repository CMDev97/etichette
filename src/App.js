import './stile/App.css';
import './stile/NavBar.css';

import NavBarComponent from "./component/NavBarComponent";
import React from "react";

import ViewEtichette from "./ViewEtichette";
import ViewHome from "./ViewHome";
import ViewProdotti from "./ViewProdotti";
import {Container} from "react-bootstrap";
import ViewSettings from "./ViewSettings";

Array.prototype.filterName = function (search){
    let newArray = [];
    this.forEach((element) => {
        if (element.name.startsWith(search)){
            newArray.push(element);
        }
    });
    return newArray;
}

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
            case "settings":
                view = <ViewSettings/>;
                break;
            default: view = '';
                break;
        }
        return (
            <div className="App">
                <NavBarComponent itemActive={this.state.itemActive}/>
                <Container>
                    {view}
                </Container>
            </div>
        );
    }
}



export default App;
