import {useDispatch, useSelector} from "react-redux";
import {Button, Table} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {setContentDrawer, setContentModal, showDrawer, showModal} from "../../actions";
import ModalDeleteEntityComponent from "../modal/ModalDeleteEntityComponent";
import React, {useEffect} from "react";
import DrawerFormIngredient from "../drawer/DrawerFormIngredient";
import {deleteIngredient, retrieveAllIngredient} from "../../actions/ActionIngredient";

function TableIngredient() {
    const ingredientState = useSelector(state => state.ingredient);
    const dispatch = useDispatch();

    useEffect(()=>{
        retrieveAllIngredient(dispatch);
    }, [1]);

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
                        dispatch(setContentModal(<ModalDeleteEntityComponent id={value.id} onDelete={deleteIngredient}/>));
                        dispatch(showModal("Rimuovi Ingrediente"));
                    }} shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </>
            )
        }
    ];

    return(
        <Table className="mt-4" dataSource={ingredientState.ingredients} columns={columns} />
    );

}

export default TableIngredient;
