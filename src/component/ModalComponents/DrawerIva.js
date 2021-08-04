import React, {useState} from "react";

import Request from "../../utils/Request";
import {Button, Form,Input, message} from "antd";
import {useDispatch} from "react-redux";
import {hideModal} from "../../actions";

function DrawerIva(props){
    const dispatch = useDispatch();
    const [object, setObjcet] = useState({
        id:0,
        description:'',
        value:''
    });

    const finish = (values)=>{
        console.log(values);
        setObjcet({id:object.id, description:values.description, value:values.valueIva});
        console.log(object);
        let request = new Request('http://localhost:8080/api/iva');
        request.methodSuccess = (json) => {
            console.log(json);
            message.success("Item salvato correttamente");
        }
        request.fetchPost(JSON.stringify(object))
            .catch(error => {
                message.error("Errore di conessione!");
            });
    }



    return (
        <>
            <Form layout="vertical" onFinish={finish}>
                <Form.Item label="Description" name="description" required tooltip="Inserire il nome del reparto associato all'iva">
                    <Input placeholder="PIZZA, DOLCI o SALATO" />
                </Form.Item>
                <Form.Item label="IVA" name="valueIva" required tooltip="Inserire il valore dell'iva del raparto">
                    <Input type="number" placeholder="Inserisci valore IVA" />
                </Form.Item>

                <Button onClick={()=>{dispatch(hideModal())}} className="me-2" >Annulla</Button>
                <Button htmlType="submit" type="primary">Salva</Button>
            </Form>
        </>
    );

}

export default DrawerIva;