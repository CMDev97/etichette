import {useSelector} from "react-redux";
import {Button, Form, Input, InputNumber, message, Space} from "antd";

import React from "react";
import {Constant} from "../../Constant";

function FormIncidenzeProduct(props){
    const formReducer = useSelector(state => state.form);

    const onFinish = (values) => {
        console.log(values);
        //addIncidenza(dispatch, values, props.idProduct);
    };

    const onFinishFailed = (errorInfo) => {
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);
    };


    return(
        <Form
            initialValues={formReducer.initialValues}
            layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>

            <Form.List name={"incidenze"}>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'description']}
                                    fieldKey={[fieldKey, 'description']}
                                    rules={[{ required: true, message: 'Missing first name' }]}
                                >
                                    <Input placeholder="First Name" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'incidenza']}
                                    fieldKey={[fieldKey, 'incidenza']}
                                    rules={[Constant.requiredField]}
                                    tooltip="Devi inserire quanto incide tale ingrediente nel prodotto">

                                    <InputNumber min={1} max={100} defaultValue={10} />

                                </Form.Item>
                            </Space>
                        ))}
                    </>
                )}
            </Form.List>


            <Form.Item>
                <Button loading={formReducer.loading} type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );
}

export default FormIncidenzeProduct;
