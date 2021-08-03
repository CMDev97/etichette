import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Table, Button} from "antd";
import parse from "html-react-parser";

function TableCateogryComponent(props){

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
                    <Button className="me-2" shape="round" type="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </>
            )
        }
    ];

    return(
        <Table className="mt-4" dataSource={props.list} columns={columns} />
    );

}

export default TableCateogryComponent;