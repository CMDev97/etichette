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
import ModalView from "./component/ModalComponents/ModalView";

Array.prototype.filterName = function (search){
    let newArray = [];
    this.forEach((element) => {
        if (element.name.startsWith(search)){
            newArray.push(element);
        }
    });
    return newArray;
}


Array.prototype.removeByID = function(id){
    let newArray = [];
    this.forEach((element)=>{
        if (element.id !== id){
            newArray.push(element);
        }
    });
    return newArray;
}

function App(){
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
                    </Switch>
                </Container>
                <ModalView/>
            </div>
        </Router>
    );
}



export default App;
