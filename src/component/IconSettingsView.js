import React, {useState} from 'react';
import {Button, Form, Input, message} from "antd";
import CustomTable from "./table/CustomTable";
import {Constant} from "../Constant";
import {columsIcon} from "./Colums";

function IconSettingsView(props){
    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        if (form.getFieldError().length === 0){
            setLoading(!loading)
            const requestInsert = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: values.description,
                    code:values.code})
            };
            fetch('http://localhost:8080/Gestionale_war/api/icon', requestInsert)
                .then(response => response.json())
                .then(data => {
                    setLoading(false);
                    console.log(data);
                    if (data.httpStatus === undefined || data.httpStatus === 200){
                        //reloadData();
                        message.success("Icona salvata correttamente!");
                    } else {
                        message.error("Salvataggio non effettuato");
                    }
                }).catch(error => {
                setLoading(false)
                message.error("Errore di connessione !");
            });
        }
    };

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item
                    label="Descrizione "
                    name="description"
                    rules={[{ required: true, message: 'Per favore inserisci la descrizione!' }]}>
                    <Input placeholder="Inserisci descrizione" />
                </Form.Item>
                <Form.Item
                    label="Code "
                    name="code"
                    rules={[{ required: true, message: 'Valore non corretto!' }]}>
                    <Input placeholder="Inserisci il codice dell'icona" />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            shape="round"
                            loading={loading}
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }>
                            Salva
                        </Button>
                    )}
                </Form.Item>
            </Form>
            <CustomTable path={Constant.icon} colums={columsIcon()}/>
        </>
    );


}

export default IconSettingsView;
