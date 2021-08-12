import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Table, Button} from "antd";
import parse from "html-react-parser";
import {useDispatch} from "react-redux";
import {setContentDrawer, setContentModal, showDrawer, showModal} from "../../actions";
import DrawerCateogry from "../DrawerComponent/DrawerCateogry";
import ModalDeleteEntityComponent from "../ModalComponents/ModalDeleteEntityComponent";
import {actionDeleteCategory} from "../../actions/ActionsCategory";

function TableCateogryComponent(props){
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
            title: "Icona",
            dataIndex: "icon",
            key: "icon",
            render: value => <>{parse(value.code)}</>
        },
        {
            title:"Action",
            key:"action",
            render: (value) => (
                <>
                    <Button className="me-2" shape="round" type="primary"
                        onClick={()=>{
                            console.log(value);
                           dispatch(setContentDrawer(<DrawerCateogry item={value}/>));
                           dispatch(showDrawer("Modifica categoria"));
                        }}
                    ><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button onClick={()=>{
                        dispatch(setContentModal(<ModalDeleteEntityComponent id={value.id}
                                                                             onDelete={actionDeleteCategory}/>));
                        dispatch(showModal("Elimina categoria"));
                    }} shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </>
            )
        }
    ];

    return(
        <Table className="mt-4" dataSource={props.list} columns={columns} />
    );

}

export default TableCateogryComponent;