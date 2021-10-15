import {Button, Form, Input, message} from "antd";
import React, {useState} from "react";
import Request from "../../utils/Request";
import {Constant} from "../../Constant";


export function FormIcon({onFinish}){

    const [loading, setLoading] = useState(false);


    const handleFinish = (value) => {
        console.log(value);
        setLoading(true);
        const request = new Request(Constant.urlBase + Constant.icon);
        request.methodSuccess = ()=>{
            setLoading(false);
            onFinish?.();
            message.success("Salvato correttamente");
        };
        request.methodError = (status)=>{
            setLoading(false);
            message.error("Non stato possibile salvare : " + status);
        };
        request.fetchPost(value);
    }


    return <Form layout="vertical" onFinish={handleFinish} style={{marginBottom:".5rem"}}>

        <Form.Item label="Descrizione" name="description"
            rules={[{ required: true, message: 'Per favore inserisci la descrizione!' }]}>
            <Input placeholder="Inserisci descrizione" />
        </Form.Item>


        <Form.Item label="Code " name="code"
            rules={[{ required: true, message: 'Valore non corretto!' }]}>
            <Input placeholder="Inserisci il codice dell'icona" />
        </Form.Item>


        <Form.Item shouldUpdate>
                <Button loading={loading} type="primary" htmlType="submit"> Salva </Button>
        </Form.Item>

    </Form>
}
