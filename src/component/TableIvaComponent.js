import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Table, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setContentModal, setEditIva, showModal} from "../actions";
import DrawerIva from "./ModalComponents/DrawerIva";

function TableIvaComponent(props){
    const ivaReducer = useSelector(state => state.ivasReducer);
    const dispatch = useDispatch();
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            render: text => <>#{text}</>
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "Value",
            dataIndex: "value",
            key: "value",
            render: value => <>{value}%</>
        },
        {
            title:"Action",
            key:"id",
            render: (value) => (
                <>
                    <Button onClick={()=>{
                        dispatch(setContentModal(<DrawerIva/>));
                        dispatch(showModal("Modifica prodotto"));
                    }} className="me-2" shape="round" type="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button onClick={()=>{

                    }} shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </>
            )
        }
    ];

    return(
        <Table className="mt-4" dataSource={props.list} columns={columns} />
    );

}

export default TableIvaComponent;
