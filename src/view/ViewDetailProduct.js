import React from "react";
import {Row, Col} from "react-bootstrap";
import { Space} from "antd";
import IngredientComponent from "../component/IngredientComponent";
import OptionProductView from "../component/OptionProductView";
import {ProductDetails} from "../component/details/ProductDetails";

function ViewDetailProduct({match}){

    const id = match.params.id;




    return (
        <div style={{padding:"0.5rem 0"}}>
            <Row className="py-5">
                <Col md={8}>
                    <Space direction={"vertical"} style={{width:"100%"}}>

                        <ProductDetails id={id}/>
                        <OptionProductView id={id}/>

                    </Space>
                </Col>
                <Col md={4}>
                    <IngredientComponent id={id}/>
                </Col>
            </Row>

        </div>
    )

}

export default ViewDetailProduct;
