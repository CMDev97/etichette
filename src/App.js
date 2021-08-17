import './stile/App.css';
import './stile/NavBar.css';
import 'antd/dist/antd.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBarComponent from "./component/NavBarComponent";
import {Container} from "react-bootstrap";
import ViewHome from "./view/ViewHome";
import ViewEtichette from "./view/ViewEtichette";
import ViewProdotti from "./view/ViewProdotti";
import ViewSettings from "./view/ViewSettings";
import DrawerView from "./component/DrawerComponent/DrawerView";
import ModalView from "./component/ModalComponents/ModalView";
import ViewDetailProduct from "./view/ViewDetailProduct";
import ViewIngredients from "./view/ViewIngredients";

Array.prototype.filterName = function (search){
    let newArray = [];
    this.forEach((element) => {
        if (element.name.startsWith(search)){
            newArray.push(element);
        }
    });
    return newArray;
}


Array.prototype.findById = function(id){
    let trovato = null;
    this.forEach((element)=>{
        if (element.id === id){
            trovato = element;
        }
    });
    return trovato;
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <NavBarComponent/>
                    <Container>
                        <Switch>
                            <Route exact path="/" component={ViewHome}/>
                            <Route exact path="/labels" component={ViewEtichette}/>
                            <Route exact path="/product" component={ViewProdotti}/>
                            <Route exact path="/settings" component={ViewSettings}/>
                            <Route exact path="/product/:id" component={ViewDetailProduct}/>
                            <Route exact path="/ingredient" component={ViewIngredients}/>
                        </Switch>
                    </Container>
                    <DrawerView/>
                    <ModalView/>
                </div>
            </Router>
        );
    }
}



export default App;
