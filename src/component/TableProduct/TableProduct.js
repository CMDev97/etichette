import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {message, Table} from "antd";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {deleteProduct} from "../../actions";





function TableProduct() {
    const productsState = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleOnClick = (object)=>{
        console.log(object.value.id);
        dispatch(deleteProduct(object.value.id));
        setTimeout(() => {
            message.success({ content: 'Cancellato con successo!', key:'updatable', duration: 2 });
        }, 1000);
    }

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            render: text => <p>#{text}</p>
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Cost",
            dataIndex: "cost",
            key: "cost"
        },
        {
            title:"Action",
            key:"action",
            render: (value) => (
                <>
                    <Button className="me-2" variant="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button onClick={()=>{handleOnClick({value})}} variant="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </>
            )
        }
    ];

    return(
        <Table className="mt-4" dataSource={productsState.products} columns={columns} />
    );

}

export default TableProduct;