import React, {useState} from "react";

import Request from "../../utils/Request";
import {Button, Form,Input, message} from "antd";
import {useDispatch} from "react-redux";
import {hideDrawer} from "../../actions";
import retrieveReparti from "../../actions/ActionIvas";

function DrawerIva(props){
    const dispatch = useDispatch();

    const [object, setObjcet] = useState({
        id:(props.item == undefined) ? 0 :props.item.id,
        description:(props.item == undefined) ? '' :props.item.description,
        value:(props.item == undefined) ? '' :props.item.value
    });

    const finish = (values)=>{
        console.log(values);
        let newObject = {
            id:(props.item != undefined) ? object.id : 0,
            description: values.description,
            value: parseInt(values.iva)
        }
        console.log(newObject);
        let request = new Request('http://localhost:8080/Gestionale_war/api/reparto');
        request.methodSuccess = (json) => {
            console.log(json);
            message.success("Reparto " + ((props.item != undefined) ? "modificato" : "salvato") + " correttamente");
            dispatch(hideDrawer());

        }
        request.fetchPost(JSON.stringify(newObject))
            .catch(error => {
                console.log(error);
                message.error("Errore di conessione!");
            });
    }

    return (
        <>
            <Form layout="vertical" onFinish={finish}>
                <Form.Item label="Description" initialValue={object.description} name="description" required tooltip="Inserire il nome del reparto associato all'iva">
                    <Input placeholder="PIZZA, DOLCI o SALATO" />
                </Form.Item>
                <Form.Item label="IVA" initialValue={object.value} name="iva" required tooltip="Inserire il valore dell'iva del raparto">
                    <Input type="number" placeholder="Inserisci valore IVA" />
                </Form.Item>

                <Button onClick={()=>{dispatch(hideDrawer())}} className="me-2" >Annulla</Button>
                <Button htmlType="submit" type="primary">Salva</Button>
            </Form>
        </>
    );

}

export default DrawerIva;