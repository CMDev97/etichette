
import {Button, Checkbox, Form, Input, message, Space} from "antd";
import React, {useState} from "react";
import {Constant} from "../../Constant";
import CustomSelectSearch from "../select/CustomSelectSearch";
import Request from "../../utils/Request";


function DrawerFormIngredient(props){

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        if (props.item !== undefined){
            values.id = props.item.id;
        }
        const request = new Request(Constant.urlBase + Constant.ingredient);
        request.methodSuccess = ()=>{
            setLoading(true);
            message.success("Salvato correttamente");
        };
        request.methodError = (status)=>{
            setLoading(false);
            message.error("Non è stato possibile salvare : " + status);
        };
        request.fetchPost(values);
    };

    const onFinishFailed = (errorInfo) => {
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);
    };


    return(
        <Form initialValues={{
            description:(props.item === undefined) ? '' : props.item.description,
            unit : (props.item === undefined) ? '0' : props.item.unit,
            enabled : (props.item === undefined) ? false : props.item.enabled
        }} form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>

            <Form.Item name="description" label="Descrizione" rules={[Constant.requiredField]}
                       tooltip="Devi inserire la descrizione dell'ingrediente">
                <Input placeholder="Inserisci descrizione ingrediente" />
            </Form.Item>

            <Space className="w-100" key={0} align="baseline" direction={"horizontal"} size={"large"}>
                <Form.Item name="unit" label="Unità di misura" rules={[Constant.requiredField]}
                           tooltip="Devi selezionare l'unità di misura dell'ingrediente">
                    <CustomSelectSearch type={Constant.unit} isSearch={false}/>
                </Form.Item>
            </Space>

            <Form.Item valuePropName="checked" name="enabled">
                <Checkbox>Disponibile</Checkbox>
            </Form.Item>


            <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );
}

export default DrawerFormIngredient;
