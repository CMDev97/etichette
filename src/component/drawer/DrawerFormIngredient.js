import {useSelector} from "react-redux";
import {Button, Checkbox, Form, Input, message, Select, Space} from "antd";
import React from "react";
import {Option} from "antd/es/mentions";
import {Constant} from "../../Constant";


function DrawerFormIngredient(props){
    const formReducer = useSelector(state => state.form);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        if (props.item !== undefined){
            values.id = props.item.id;
        }
    };

    const onFinishFailed = (errorInfo) => {
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);
    };


    return(
        <Form initialValues={{
            description:(props.item === undefined) ? '' : props.item.description,
            unitWeight : (props.item === undefined) ? '0' : props.item.unitWeight,
            enable : (props.item === undefined) ? false : props.item.enable
        }} form={form}
              layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>

            <Form.Item name="description" label="Descrizione" rules={[Constant.requiredField]}
                       tooltip="Devi inserire la descrizione dell'ingrediente">
                <Input placeholder="Inserisci descrizione ingrediente" />
            </Form.Item>

            <Space className="w-100" key={0} align="baseline" direction={"horizontal"} size={"large"}>
                <Form.Item name="unitWeight" label="Unità di misura" rules={[Constant.requiredField]}
                           tooltip="Devi selezionare l'unità di misura dell'ingrediente">
                    <Select defaultValue="0" >
                        <Option value="0">Seleziona unità</Option>
                        <Option value="KG">Peso (kg)</Option>
                        <Option value="L">Volume (litro)</Option>
                        <Option value="M">Lunghezza (metro)</Option>
                    </Select>
                </Form.Item>
            </Space>

            <Form.Item valuePropName="checked" name="enable">
                <Checkbox>Disponibile</Checkbox>
            </Form.Item>


            <Form.Item>
                <Button loading={formReducer.loading} type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );
}

export default DrawerFormIngredient;
