import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Table} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {setContentDrawer, setContentModal, showDrawer, showModal} from "../../actions";
import ModalDeleteEntityComponent from "../ModalComponents/ModalDeleteEntityComponent";
import {deleteProduct} from "../../actions/ActionProduct";
import DrawerFormProduct from "../DrawerComponent/DrawerFormProduct";


function TableProduct() {
    const productsState = useSelector(state => state.products);
    const dispatch = useDispatch();

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            render: text => <p>#{text}</p>
        },
        {
            title: "Codice int.",
            dataIndex: "codice",
            key: "codice"
        },
        {
            title: "Name",
            dataIndex: "nome",
            key: "nome"
        },
        {
            title: "Iva",
            dataIndex: "reparto",
            key: "reparto",
            render: reparto => <>{reparto.value}%</>
        },
        {
            title: "Preferito",
            dataIndex: "preferito",
            key: "preferito",
            render: value => <><i className= {(value) ? "fas fa-heart text-danger" : "far fa-heart text-danger"}></i></>
        },
        {
            title:"Action",
            key:"action",
            render: (value) => (
                <>
                    <Button className="me-2" shape="round" type="default"><FontAwesomeIcon icon={faInfoCircle}/></Button>
                    <Button onClick={()=>{
                        console.log(value);
                        dispatch(setContentDrawer(<DrawerFormProduct item={value}/>))
                        dispatch(showDrawer("Modifica Prodotto"));
                    }} className="me-2" shape="round" type="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button onClick={()=>{
                        dispatch(setContentModal(<ModalDeleteEntityComponent id={value.id} onDelete={deleteProduct} />));
                        dispatch(showModal("Rimuovi prodotto"));
                    }} shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </>
            )
        }
    ];

    return(
        <Table className="mt-4" dataSource={productsState.products} columns={columns} />
    );

}

export default TableProduct;