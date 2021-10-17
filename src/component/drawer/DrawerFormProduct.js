import React  from 'react';
import {Form, message, Input, Button, Space, Checkbox} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import SelectReparto from "../select/SelectReparto";
import {addProduct} from "../../actions/ActionProduct";
import SelectTagDieta from "../select/SelectTagDieta";
import {Constant} from "../../Constant";
import CustomSelectSearch from "../select/CustomSelectSearch";

function DrawerFormProduct(props){

    const formReducer = useSelector(state => state.form);
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        if (props.item !== undefined){
            values.id = props.item.id;
            values.codice = props.item.codice
            if (!isNaN(values.reparto)) values.reparto = props.item.reparto
            if (!isNaN(values.categoria)) values.categoria = props.item.categoria
        }
        addProduct(dispatch, values, props.actionOnSave);
    };

    const onFinishFailed = (errorInfo) => {
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);
    };


    return(
        <Form initialValues={{
                confezionato:(props.item === undefined) ? false : props.item.confezionato,
                nome : (props.item === undefined) ? '' : props.item.nome,
                reparto : (props.item === undefined) ? 0 : props.item.reparto.id,
                categoria:(props.item === undefined) ? 0 : props.item.categoria.id,
                tagDieta:(props.item === undefined) ? [] : props.item.tagDieta
            }} form={form}
            layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>

            <Form.Item name="nome" label="Name" rules={[Constant.requiredField]}
                       tooltip="Devi inserire il nome del prodotto">
                <Input placeholder="Inserisci Nome prodotto" />
            </Form.Item>

            <Space className="w-100" key={0} align="baseline" direction={"horizontal"} size={"large"}>
                <Form.Item name="reparto" label="Reparto iva" rules={[Constant.requiredField]}
                           tooltip="Devi selezionare il reparto iva per il prodotto">
                    <SelectReparto/>
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
                <Button loading={formReducer.loading} type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );

}

export default DrawerFormProduct;
