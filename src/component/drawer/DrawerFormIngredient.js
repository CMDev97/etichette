
import {Button, Checkbox, Form, Input, message, Space} from "antd";
import React, {useState} from "react";
import {Constant} from "../../Constant";
import CustomSelectSearch from "../select/CustomSelectSearch";
import Request from "../../utils/Request";
import {useDispatch} from "react-redux";
import {ACTION_HIDDEN_DRAWER} from "../../reducers/DrawerReducer";


function DrawerFormIngredient({item = undefined}){
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        if (item !== undefined){
            values.id = item.id;
        }
        setLoading(true);
        const request = new Request(Constant.urlBase + Constant.ingredient);
        request.methodSuccess = ()=>{
            setLoading(false);
            message.success("Salvato correttamente");
            dispatch(ACTION_HIDDEN_DRAWER);
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
            description:(item === undefined) ? '' : item.description,
            unit : (item === undefined) ? '0' : item.unit,
            incidence : (item === undefined) ? 0 : item.incidence,
            enabled : (item === undefined) ? false : item.enabled
        }} form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>

            <Form.Item name="description" label="Descrizione" rules={[Constant.requiredField]}
                       tooltip="Devi inserire la descrizione dell'ingrediente">
                <Input placeholder="Inserisci descrizione ingrediente" />
            </Form.Item>

            <Space className="w-100" key={0} align="baseline" direction={"horizontal"} size={"large"}>
                <Form.Item name="unit" label="Unità di misura" rules={[Constant.requiredField]}
                           tooltip="Devi selezionare l'unità di misura dell'ingrediente">
                    <CustomSelectSearch type={Constant.unit} isSearch={false} defValue={false}/>
                </Form.Item>

                <Form.Item name="incidence" label="Incidenza" rules={[Constant.requiredField]}
                           tooltip="Devi inserire l'incidenza dell'ingrediente all'interno di un generico prodotto">

                    <Input type={"number"} placeholder={"0 ... 100 %"} min={0} max={100}/>
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
