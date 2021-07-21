import React from "react";
import FormSearchComponent from "./component/FormSearchComponent";
import ListCardProduct from "./component/ListCardProduct";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



class ViewEtichette extends React.Component{

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            lista : [],
            productSelected : undefined,
            error : undefined,
            searchState : undefined
        }
    }


    componentDidMount() {
        console.log("componentDidMount");
        let json = require('./dataMock/product.json');
        this.setState({
            lista  : json.product
        });
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");

    }

    set list(list){
        this.setState({
            lista : list
        });
    }

    render() {
        console.log("render");
        return(
            <div className="mt-4">
                <h2>Etichette</h2>
                <Row>
                    <Col md="4" className="List-Box px-2 py-3">
                        <FormSearchComponent parent={this}/>
                        <ListCardProduct lista={this.state.lista}/>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default ViewEtichette;