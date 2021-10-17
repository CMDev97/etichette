import {Button, Checkbox, Form, Input, message, Space} from "antd";
import {Constant} from "../../Constant";
import CustomSelectSearch from "../select/CustomSelectSearch";
import SelectTagDieta from "../select/SelectTagDieta";
import React, {useState} from "react";
import Request from "../../utils/Request";
import {useDispatch} from "react-redux";
import {hideDrawer} from "../../actions";


export function FormProduct({item}){
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleFinish = (values) => {

        if (item !== undefined){
            values.id = item.id;
            values.codice = item.codice
            if (!isNaN(values.reparto)) values.reparto = item.reparto
            if (!isNaN(values.categoria)) values.categoria = item.categoria
        }
        console.log(values);
        setLoading(true);
        const request = new Request(Constant.urlBase + Constant.product);
        request.methodSuccess = () => {
            setLoading(false);
            dispatch(hideDrawer());
            message.success("Salvato correttamente");
        }
        request.methodError = (status) => {
            setLoading(false);
            dispatch(hideDrawer());
            message.error("Si è verificato un errore : " + status);
        }
        request.fetchPost(values);

    };

    const handleFailed = (errorInfo) => {
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);
    };

    return (
        <Form initialValues={{
            confezionato:(item === undefined) ? false : item.confezionato,
            nome : (item === undefined) ? '' : item.nome,
            reparto : (item === undefined) ? 0 : item.reparto.id,
            categoria:(item === undefined) ? 0 : item.categoria.id,
            tagDieta:(item === undefined) ? [] : item.tagDieta
        }} layout="vertical" onFinish={handleFinish} onFinishFailed={handleFailed}>

            <Form.Item name="nome" label="Name" rules={[Constant.requiredField]}
                       tooltip="Devi inserire il nome del prodotto">
                <Input placeholder="Inserisci Nome prodotto" />
            </Form.Item>

            <Space className="w-100" key={0} align="baseline" direction={"horizontal"} size={"large"}>
                <Form.Item name="reparto" label="Reparto iva" rules={[Constant.requiredField]}
                           tooltip="Devi selezionare il reparto iva per il prodotto">
                    <CustomSelectSearch type={Constant.iva} />
                </Form.Item>
                <Form.Item name="categoria" label="Categoria" rules={[Constant.requiredField]}
                           tooltip="Devi selezionare la categoria per il prodotto">
                    <CustomSelectSearch type={Constant.category} />
                </Form.Item>
            </Space>

            <Form.Item valuePropName="checked" name="confezionato">
                <Checkbox>Confezionato</Checkbox>
            </Form.Item>

            <Form.Item name="tagDieta" label="Tags">
                <SelectTagDieta/>
            </Form.Item>

            <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );
}
