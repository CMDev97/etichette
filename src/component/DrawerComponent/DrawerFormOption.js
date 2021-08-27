import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Input, InputNumber, message, Select, Space} from "antd";


import React from "react";
import {Option} from "antd/es/mentions";
import {Constant} from "../../Constant";

function DrawerFormOption(props){
    const formReducer = useSelector(state => state.form);


    const dispatch = useDispatch();

    const [form] = Form.useForm();


    const onFinish = (values) => {
        console.log(values);
    };

    const onFinishFailed = (errorInfo) => {
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);
    };


    return(
        <Form form={form}
              layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>

            <Form.Item name="description" label="Descrizione" required rules={[{required: true,},]}
                       tooltip="La descrizione della variante del prodotto">
                <Input placeholder="Inserisci descrizione" />
            </Form.Item>

            <Form.Item
                style={{width:"100%"}}
                tooltip="Unità di misura per la quantità del prodotto"
                       label="Unità di misura e quantità">
                <Input.Group compact>
                    <Form.Item style={{width:"50%"}} name="unit" rules={[Constant.requiredField]}>
                        <Select style={{width:"100%"}} defaultValue={"0"}>
                            <Option value={"0"}>Selezionata Unità</Option>
                            <Option value={"KG"}>Peso (KG)</Option>
                            <Option value={"PZ"}>Pezzo</Option>
                            <Option value={"LT"}>Volume (Litri)</Option>
                            <Option value={"MT"}>Dimensione (Metro)</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="quantity" style={{width:"50%"}} rules={[Constant.requiredField]}>
                        <InputNumber value={1} min={1} max={1000} style={{width:"100%"}} placeholder="Inserire quantità o valore"/>
                    </Form.Item>
                </Input.Group>
            </Form.Item>

            <Space className="w-100" key={0} align="baseline" direction={"horizontal"} size={"large"}>
                <Form.Item initialValue={1} name="price" label="Prezzo" rules={[Constant.requiredField]}
                           tooltip="Inserisci prezzo variante">
                    <InputNumber
                        defaultValue={1.23}
                        formatter={value => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\€\s?|(,*)/g, '')}/>
                </Form.Item>
            </Space>

            <Form.Item>
                <Button loading={formReducer.loading} type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );

}

export default DrawerFormOption;