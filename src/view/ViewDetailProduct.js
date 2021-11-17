import React from "react";
import {Row, Col} from "react-bootstrap";
import { Space} from "antd";
import IngredientComponent from "../component/IngredientComponent";
import OptionProductView from "../component/settings/OptionProductView";
import {ProductDetails} from "../component/details/ProductDetails";
import {CustomBreadcrumb} from "../component/breadcrumb/CustomBreadcrumb";
import {useParams} from "react-router-dom";

function ViewDetailProduct(){

    const {id} = useParams();

    return (
        <div style={{padding:"0.5rem 0", textAlign:"start"}}>
            <CustomBreadcrumb/>
            <Row className="py-2">
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
