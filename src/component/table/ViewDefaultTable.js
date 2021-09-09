import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import FormSearchComponent from "../FormSearchComponent";
import CustomTable from "./CustomTable";


function ViewDefaultTable({type, extra='', columns, selection = false,
                          onChangeSelection}){

    const [path, setPath] = useState(type);

    const startSearch = (value) => {
        setPath(type + "/search/" + value);
    }

    const cancelSearch = ()=>{
        setPath(type);
    }

    return (
        <>
        <Row className="py-2 d-flex justify-content-between">
            <Col md="5">
                <FormSearchComponent onClickSearch={startSearch} onClickCancel={cancelSearch}/>
            </Col>
            <Col className="text-end">
                {extra}
            </Col>
        </Row>
        <CustomTable path={path} colums={columns} selection={selection} onChangeSelection={onChangeSelection}/>
        </>
    );
}

export default ViewDefaultTable;
