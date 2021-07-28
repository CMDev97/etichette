
import React from "react";
import FormSearchComponent from "./FormSearchComponent";
import ListProduct from "./ListProduct";
import Col from "react-bootstrap/Col";

class ListSearchProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lista : [],
            productSelected : undefined,
            error : undefined,
            searchState : undefined
        }
        this.handleOnClickSearch = this.handleOnClickSearch.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
        let json = require('../../dataMock/product.json');
        this.setState({
            lista : json.product
        });
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handleOnClickSearch(value){
        console.log(value);
    }

    render() {
        return (
            <Col md="4" className="List-Box px-2 py-3">
                <FormSearchComponent onClickSearch={this.handleOnClickSearch}/>
                <ListProduct lista={this.state.lista}/>
            </Col>
        );
    }


}

export default ListSearchProduct;