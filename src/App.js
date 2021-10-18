import './stile/App.css';
import './stile/NavBar.css';
import 'antd/dist/antd.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBarComponent from "./component/NavBarComponent";
import {Container} from "react-bootstrap";
import ViewHome from "./view/ViewHome";
import ViewBalance from "./view/ViewBalance";
import ViewProducts from "./view/ViewProducts";
import ViewSettings from "./view/ViewSettings";
import DrawerView from "./component/drawer/DrawerView";
import ModalView from "./component/modal/ModalView";
import ViewDetailProduct from "./view/ViewDetailProduct";
import ViewIngredients from "./view/ViewIngredients";
import {ViewSeller} from "./view/ViewSeller";
import {BaseLayout} from "./view/definition/BaseLayout";

// eslint-disable-next-line no-extend-native
Array.prototype.filterName = function (search){
    let newArray = [];
    this.forEach((element) => {
        if (element.name.startsWith(search)){
            newArray.push(element);
        }
    });
    return newArray;
}


// eslint-disable-next-line no-extend-native
Array.prototype.findById = function(id){
    let trovato = null;
    this.forEach((element)=>{
        if (element.id === id){
            trovato = element;
        }
    });
    return trovato;
}

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ViewHome}/>
                <Route exact path="/seller" component={ViewSeller}/>
                <Route exact path="/balance">
                    <BaseLayout>
                        <ViewBalance/>
                    </BaseLayout>
                </Route>
                <Route exact path="/product">
                    <BaseLayout>
                        <ViewProducts/>
                    </BaseLayout>
                </Route>
                <Route exact path="/settings">
                    <BaseLayout>
                        <ViewSettings/>
                    </BaseLayout>
                </Route>
                <Route exact path="/product/:id" component={()=>(<BaseLayout>
                    <ViewDetailProduct/>
                </BaseLayout>)}>

                </Route>
                <Route exact path="/ingredient">
                    <BaseLayout>
                        <ViewIngredients/>
                    </BaseLayout>
                </Route>
            </Switch>
            <DrawerView/>
            <ModalView/>
        </Router>
    );

}



export default App;
