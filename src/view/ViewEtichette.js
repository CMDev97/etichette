import React from "react";
import Row from "react-bootstrap/Row";
import ListSearchProduct from "../component/ListProductComponent/ListSearchProduct";

function ViewEtichette(){
    return(
        <div className="mt-4">
            <h2>Etichette</h2>
            <Row>
                <ListSearchProduct/>
            </Row>
        </div>
    );
}

export default ViewEtichette;