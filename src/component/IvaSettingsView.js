import React, {useEffect} from "react";
import TableIvaComponent from "./table/TableIvaComponent";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setContentDrawer, showDrawer} from "../actions";
import {Row, Col} from "react-bootstrap";
import FormSearchComponent from "./FormSearchComponent";
import DrawerIva from "./DrawerComponent/DrawerIva";
import retrieveReparti from "../actions/ActionIvas";



function IvaSettingsView(){

    const ivaReducer = useSelector(state => state.ivasReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        retrieveReparti(dispatch);
    },[1]);

    const onSearchClicked = (value) => {
        console.log(value);
    }

    return (
        <>
            <Row>
                <Col lg="6">
                    <FormSearchComponent  onClickSearch={onSearchClicked} />
                </Col>
                <Col lg="6" className="d-flex justify-content-end" >
                    <Button onClick={()=>{
                        dispatch(setContentDrawer(<DrawerIva item={undefined}/>));
                        dispatch(showDrawer("Aggiungi reparto"));
                    }} type="primary" shape="round">
                        Nuovo
                    </Button>
                </Col>
            </Row>

            <TableIvaComponent list={ivaReducer.list}/>
        </>
    );

}

export default IvaSettingsView;