import {Link} from "react-router-dom";
import {Button} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faInfoCircle, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {setContentDrawer, setContentModal, showDrawer, showModal} from "../../actions";
import GenericDeleteModal from "../modal/GenericDeleteModal";
import React from "react";
import DrawerFormIngredient from "../drawer/DrawerFormIngredient";
import {deleteIngredient} from "../../actions/ActionIngredient";
import parse from "html-react-parser";
import FormIva from "../forms/FormIva";
import {FormCategory} from "../forms/FormCategory";
import {Constant} from "../../Constant";
import {FormProduct} from "../forms/FormProduct";


export const columsProduct = (dispatch) => {
    return [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            render: text => <>#{text}</>
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
                    <Link to={"product/" + value.id}><Button  className="me-2" shape="round" type="default"><FontAwesomeIcon icon={faInfoCircle}/></Button></Link>
                    <Button onClick={()=>{
                        console.log(value);
                        dispatch(setContentDrawer(<FormProduct item={value}/>))
                        dispatch(showDrawer("Modifica Prodotto"));
                    }} className="me-2" shape="round" type="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button onClick={()=>{
                        dispatch(setContentModal(<GenericDeleteModal id={value.id} type={Constant.product}/>));
                        dispatch(showModal("Rimuovi prodotto"));
                    }} shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </>
            )
        }
    ];
}

export const columsIngredient = (dispatch) => {
    return [
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
            title: "Unità di misura",
            dataIndex: "unitWeight",
            key: "unitWeight"
        },
        {
            title: "Disponibile",
            dataIndex: "enable",
            key: "enable",
            render: (value => (
                <i className= {(value) ? "fas fa-check-circle " : "fas fa-times-circle"}></i>
            ))
        },
        {
            title:"Action",
            key:"action",
            render: (value) => (
                <>
                    <Button onClick={()=>{
                        dispatch(setContentDrawer(<DrawerFormIngredient item={value}/>));
                        dispatch(showDrawer("Modifica Ingrediente"));
                    }} className="me-2" shape="round" type="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button onClick={()=>{
                        dispatch(setContentModal(<GenericDeleteModal id={value.id} onDelete={deleteIngredient}/>));
                        dispatch(showModal("Rimuovi Ingrediente"));
                    }} shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </>
            )
        }
    ];
}

export const columsIngredientSelect = () => {
    return [
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
            title: "Unità di misura",
            dataIndex: "unitWeight",
            key: "unitWeight"
        }
    ];
}

export const columsIcon = () => {
    return [{
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
            title: "Icon",
            dataIndex: "code",
            key: "code",
            render: value => <span>{parse(value)}</span>
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
    ]};

export const columnsIncidenze = () => {
    return [
        {
            title: "Ingrediente",
            dataIndex: "ingrediente",
            key: "ingrediente",
            render: text => {
                console.log(text);
                return (<>{text.description}</>)
            }
        },
        {
            title: "Incidenza",
            dataIndex: "incidenza",
            key: "incidenza",
            render: value => <>{value} %</>
        }]
};

export const columnsIvas = (dispatch) => { return[
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
                    dispatch(setContentDrawer(<FormIva item={value}/>));
                    dispatch(showDrawer("Modifica prodotto"));
                }} className="me-2" shape="round" type="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                <Button onClick={()=>{
                    dispatch(setContentModal(<GenericDeleteModal type={Constant.iva} id={value.id}/>));
                    dispatch(showModal("Elimina iva"));
                }} shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
            </>
        )
    }
]};

export const columnsCategories = (dispatch) => { return [
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
                            dispatch(setContentDrawer(<FormCategory item={value}/>));
                            dispatch(showDrawer("Modifica categoria"));
                        }}
                ><FontAwesomeIcon icon={faEdit}/></Button>

                <Button onClick={()=>{
                    dispatch(setContentModal(<GenericDeleteModal id={value.id} type={Constant.category}/>));
                    dispatch(showModal("Elimina categoria"));
                }} shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>

            </>
        )
    }]};

