import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Table, Button} from "antd";

function TableIvaComponent(props){

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
                    }} className="me-2" shape="round" type="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button onClick={()=>{
                        console.log(value);
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
