import React, {useState} from "react";
import {Button, Form, Input, message} from "antd";
import {useDispatch} from "react-redux";
import {hideDrawer} from "../../actions";
import Request from "../../utils/Request";
import {Constant} from "../../Constant";

function FormIva({item = null}){
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [fields] = useState([
        {
            name: ['description'],
            value: (item === null) ? '' : item.description,
        },
        {
            name: ['iva'],
            value: (item === null) ? '' : item.value
        }
    ]);


    const finish = (values)=>{
        let newObject = {
            id:(item !== null) ? item.id : 0,
            description: values.description,
            value: parseInt(values.iva)
        }
        setLoading(true);
        const request = new Request(Constant.urlBase + Constant.iva);
        request.methodSuccess = () => {
            setLoading(false);
            message.success("Reparto salvato correttamente");
            dispatch(hideDrawer());
        }
        request.methodError = (status) => {
            setLoading(false);
            message.error("Si è verificato un errore : " + status);
            dispatch(hideDrawer());
        }
        request.fetchPost(newObject);
    }


    return (
        <>
            <Form layout="vertical" fields={fields} onFinish={finish}>

                <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Inserire descrizione iva!' }]} required tooltip="Inserire il nome del reparto associato all'iva">
                    <Input placeholder="PIZZA, DOLCI o SALATO" />
                </Form.Item>

                <Form.Item label="IVA" name="iva" required rules={[{ required: true, message: 'Inserire valore iva!' }]} tooltip="Inserire il valore dell'iva del raparto">
                    <Input type="number" placeholder="Inserisci valore IVA" />
                </Form.Item>

                <Button onClick={()=>{dispatch(hideDrawer())}} className="me-2" >Annulla</Button>
                <Button loading={loading} htmlType="submit" type="primary">Salva</Button>

            </Form>
        </>
    );

}

export default FormIva;
