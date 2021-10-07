import React, {useEffect} from 'react';
import TableCateogryComponent from "./table/TableCateogryComponent";
import {useDispatch, useSelector} from "react-redux";
import {reloadCategory} from "../actions/ActionsCategory";
import {Col, Row} from "react-bootstrap";
import FormSearchComponent from "./FormSearchComponent";
import {Button} from "antd";
import {setContentDrawer, showDrawer} from "../actions";
import DrawerCateogry from "./drawer/DrawerCateogry";

function CategorySettingsView(props){
    const categoryReducer = useSelector(state => state.category)
    const dispatch = useDispatch();


    useEffect(()=>{
        reloadCategory(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const onSearchClicked = ()=>{

    }

    return (
        <>
            <Row>
                <Col lg="6">
                    <FormSearchComponent  onClickSearch={onSearchClicked} />
                </Col>
                <Col lg="6" className="d-flex justify-content-end" >
                    <Button onClick={()=>{
                        dispatch(setContentDrawer(<DrawerCateogry item={undefined}/>));
                        dispatch(showDrawer("Aggiungi Categoria"));
                    }} type="primary" shape="round">
                        Nuovo
                    </Button>
                </Col>
            </Row>
            <TableCateogryComponent list={categoryReducer.list}/>
        </>
    );
}

export default CategorySettingsView;
