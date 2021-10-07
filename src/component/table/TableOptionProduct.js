import {useSelector} from "react-redux";
import {Button, Table} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

import React from "react";

function TableOptionProduct() {
    const optionProduct = useSelector(state => state.optionProduct);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            render: text => <>#{text}</>
        },
        {
            title: "Descrizione",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "Unità",
            dataIndex: "unit",
            key: "unit"
        },
        {
            title: "Quantità",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Prezzo",
            dataIndex: "price",
            key: "price",
            render: value => <>€ {value}</>
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <>
                    <Button className="me-2" shape="round" type="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </>
            )
        }
    ];

    return (
        <Table className="mt-4" dataSource={optionProduct.list} columns={columns}/>
    );
}

export default TableOptionProduct;
