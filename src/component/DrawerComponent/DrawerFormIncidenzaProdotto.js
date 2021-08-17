import {useDispatch, useSelector} from "react-redux";
import {Button, Form, InputNumber, message} from "antd";

import React from "react";
import SelectIngrediente from "../SelectIngrediente";
import {addIncidenza} from "../../actions/ActionIngredient";

function DrawerFormIncidenzaProdotto(props){
    const formReducer = useSelector(state => state.form);
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        addIncidenza(dispatch, values, props.idProduct);
    };

    const onFinishFailed = (errorInfo) => {
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);
    };


    return(
        <Form form={form}
              layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>

            <Form.Item name="ingrediente" label="Ingrediente" required rules={[{required: true,},]}
                       tooltip="Devi selezionare un ingrediente">
                <SelectIngrediente/>
            </Form.Item>

            <Form.Item name="incidenza" label={"Percentuale incidenza"} required rules={[{required: true,},]}
                       tooltip="Devi inserire quanto incide tale ingrediente nel prodotto">
                <InputNumber min={10} max={100} defaultValue={10} />
            </Form.Item>


            <Form.Item>
                <Button loading={formReducer.loading} type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );
}

export default DrawerFormIncidenzaProdotto;