import React, {useState} from "react";
import Request from "../../utils/Request";
import {Button, Form,Input, message} from "antd";
import {useDispatch} from "react-redux";
import {hideDrawer} from "../../actions";
import retrieveReparti from "../../actions/ActionIvas";

function DrawerIva(props){
    const dispatch = useDispatch();

    const [fields, setFields] = useState([
        {
            name: ['description'],
            value: (props.item === undefined) ? '' : props.item.description,
        },
        {
            name: ['iva'],
            value: (props.item === undefined) ? '' : props.item.value
        }
    ]);


    const finish = (values)=>{;
        let newObject = {
            id:(props.item !== undefined) ? props.item.id : 0,
            description: values.description,
            value: parseInt(values.iva)
        }
        let request = new Request('http://localhost:8080/Gestionale_war/api/reparto');
        request.methodSuccess = () => {
            message.success("Reparto " + ((props.item !== undefined) ? "modificato" : "salvato") + " correttamente");
            dispatch(hideDrawer());
            retrieveReparti(dispatch);
        }
        request.fetchPost(JSON.stringify(newObject))
            .catch(error => {
                console.log(error);
                message.error("Errore di conessione!");
            });
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
                <Button htmlType="submit" type="primary">Salva</Button>
            </Form>
        </>
    );

}

export default DrawerIva;