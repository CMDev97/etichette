import React, {useEffect, useState} from "react";
import TableIvaComponent from "./TableIvaComponent";
import {Button, Form, Input, InputNumber, message} from "antd";


function IvaViewEditComponent(){

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const reloadData = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:8080/api/iva', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setList(data);
            });
    };


    useEffect(()=>{
        reloadData();
    },[1]);


    const [form] = Form.useForm();

    const onFinish = (values) => {
        if (values.description !== undefined && values.value !== undefined){
            setLoading(!loading)
            const requestInsert = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: values.description,
                    value:values.value})
            };
            fetch('http://localhost:8080/api/iva', requestInsert)
                .then(response => response.json())
                .then(data => {
                    setLoading(false);
                    console.log(data);
                    if (data.httpStatus === undefined || data.httpStatus === 200){
                        reloadData();
                        message.success("Reparto salvato correttamente!");
                    } else {
                        message.error("Salvataggio non effettuato");
                    }
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
                    label="Iva "
                    name="value"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <InputNumber
                        min={1} max={24}
                        defaultValue="0"
                        type="number"
                        placeholder="Inserisci iva"
                    />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
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
            <TableIvaComponent list={list}/>
        </>
    );

}

export default IvaViewEditComponent;