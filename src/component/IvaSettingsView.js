import React, {useEffect} from "react";
import TableIvaComponent from "./TableIvaComponent";
import {Button, Form, Input, InputNumber, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setContentModal, setEditIva, setListIvas, setLoadingUploadIvas, showModal} from "../actions";
import Request from "../utils/Request";
import DrawerIva from "./ModalComponents/DrawerIva";

function IvaSettingsView(){
    const ivaReducer = useSelector(state => state.ivasReducer);
    const dispatch = useDispatch();


    const reloadData = () => {
        let request = new Request('http://localhost:8080/Gestionale_war/api/reparto');
        request.methodSuccess = (json)=>{
            dispatch(setListIvas(json));
        }
        request.fetchData().catch(error => {
            message.error("Si è verificato un errore nello scaricare i dati!");
        });
    };


    useEffect(()=>{
        reloadData();
    },[1]);


    const [form] = Form.useForm();

    const onFinish = (values) => {
        if (form.getFieldError().length === 0){
            dispatch(setLoadingUploadIvas(!ivaReducer.loadingUpload))
            const requestInsert = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: values.description,
                    value:values.value})
            };
            fetch('http://localhost:8080/Gestionale_war/api/reparto', requestInsert)
                .then(response => response.json())
                .then(data => {
                    dispatch(setLoadingUploadIvas(false))
                    console.log(data);
                    if (data.httpStatus === undefined || data.httpStatus === 200){
                        reloadData();
                        message.success("Reparto salvato correttamente!");
                        form.resetFields();
                    } else {
                        message.error("Salvataggio non effettuato");
                    }
                }).catch(error => {
                    dispatch(setLoadingUploadIvas(false))
                    message.error("Errore di connessione !");
                });
        }
    };

    return (
        <>
            <Button onClick={()=>{
                dispatch(setContentModal(<DrawerIva/>));
                dispatch(showModal("Aggiungi iva"));
            }} type="primary" shape="round">Nuovo</Button>
            <TableIvaComponent list={ivaReducer.list}/>
        </>
    );

}

export default IvaSettingsView;