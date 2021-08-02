import React, { useState } from 'react';
import {Form, message, Input, Button, InputNumber} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {addProduct, hideModal} from "../../actions";




function ModalFormProduct(){
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        message.loading({ content: 'Caricamento in corso...', key:'updatable' })
        const jsonValue = {
            id:34,
            name:values.name,
            cost:values.cost
        }
        console.log(jsonValue);
        dispatch(addProduct(jsonValue));
        setTimeout(() => {
            message.success({ content: 'Caricato!', key:'updatable', duration: 2 });
        }, 1000);
        dispatch(hideModal());
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo.errorFields);
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);

    };


    return(
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item name="name" label="Name" required rules={[
                {
                    required: true,
                },
            ]} tooltip="Devi inserire il nome del prodotto">
                <Input placeholder="Inserisci Nome prodotto" />
            </Form.Item>
            <Form.Item name="cost" label="Cost" required rules={[
                {
                    required: true,
                },
            ]} tooltip="Devi inserire il prezzo del prodotto">
                <InputNumber
                    formatter={value => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\€\s?|(,*)/g, '')}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );

}

export default ModalFormProduct;