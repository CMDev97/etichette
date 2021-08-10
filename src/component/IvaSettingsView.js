import React, {useEffect} from "react";
import TableIvaComponent from "./TableIvaComponent";
import {Button, Form, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setContentDrawer, setListIvas, setLoadingUploadIvas, showDrawer} from "../actions";
import Request from "../utils/Request";
import {Row, Col} from "react-bootstrap";
import FormSearchComponent from "./FormSearchComponent";
import DrawerIva from "./DrawerComponent/DrawerIva";

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

    const onSearchClicked = (value) => {
        console.log(value);
    }

    const onRefresh = () => {
        reloadData();
    }

    return (
        <>
            <Row>
                <Col lg="6">
                    <FormSearchComponent  onClickSearch={onSearchClicked} />
                </Col>
                <Col lg="6" className="d-flex justify-content-end" >
                    <Button onClick={()=>{
                        dispatch(setContentDrawer(<DrawerIva/>));
                        dispatch(showDrawer("Nuovo reparto"));
                    }} type="primary" shape="round">
                        Nuovo
                    </Button>
                </Col>
            </Row>

            <TableIvaComponent list={ivaReducer.list} onRefreshData={onRefresh}/>
        </>
    );

}

export default IvaSettingsView;