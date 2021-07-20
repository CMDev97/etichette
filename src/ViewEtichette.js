import React from "react";
import FormSearchComponent from "./component/FormSearchComponent";
import ListCardProduct from "./component/ListCardProduct";



class ViewEtichette extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        let json = require('./dataMock/product.json');
        return(
            <div>
                <h2>Etichette</h2>
                <div className="List-Box">
                    <FormSearchComponent/>
                    <ListCardProduct lista={json.product}/>
                </div>
            </div>
        );
    }

}

export default ViewEtichette;