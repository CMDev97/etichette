import React from "react";
import ListSearchProduct from "../component/ListProductComponent/ListSearchProduct";
import {Row, Col} from "antd";
import {FormBalanceProduct} from "../component/forms/FormBalanceProduct";
import {useDispatch} from "react-redux";
import {setOption} from "../actions/ActionFormBalance";

function ViewBalance(){

    const dispatch = useDispatch();

    return(
        <>
            <Row className={"mt-5"} gutter={[24,8]}>
                <Col span={8}>
                    <div className={"shadow Box"}>
                        <ListSearchProduct handleClickItem={(option) => dispatch(setOption(option))}/>
                    </div>
                </Col>

                <Col span={16}>
                    <FormBalanceProduct/>
                </Col>
            </Row>
        </>

    );
}



export default ViewBalance;
