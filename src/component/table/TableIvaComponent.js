import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Table, Button} from "antd";
import {useDispatch} from "react-redux";
import {setContentDrawer, setContentModal, showDrawer, showModal} from "../../actions";
import DrawerIva from "../drawer/DrawerIva";
import ModalDeleteEntityComponent from "../modal/ModalDeleteEntityComponent";
import {actionDeleteReparto} from "../../actions/ActionIvas";

function TableIvaComponent(props){
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
                        console.log(value);
                        dispatch(setContentDrawer(<DrawerIva item={value}/>));
                        dispatch(showDrawer("Modifica prodotto"));
                    }} className="me-2" shape="round" type="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button onClick={()=>{
                        dispatch(setContentModal(<ModalDeleteEntityComponent id={value.id}
                        onDelete={actionDeleteReparto}/>));
                        dispatch(showModal("Elimina iva"));
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
