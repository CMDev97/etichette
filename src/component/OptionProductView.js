import {Button, Card} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import TableOptionProduct from "./table/TableOptionProduct";
import {retriveOptionProduct} from "../actions/ActionOptionProduct";
import {useDispatch} from "react-redux";


export default function OptionProductView(props){
    const dispatch = useDispatch();

    useEffect(()=>{
            retriveOptionProduct(dispatch, props.id);
        }, [props.id])

    return (
        <Card className="shadow">
            <div className="card-body d-flex">
                <h3 className="card-title w-100 text-start mb-0">Varianti prodotto</h3>
                <span className="flex-shrink-1">
                    <Button shape="round" type="primary"><FontAwesomeIcon icon={faPlusCircle}/></Button>
                </span>
            </div>
            <div className="card-body p-0">
                <TableOptionProduct />
            </div>
        </Card>
    );

}