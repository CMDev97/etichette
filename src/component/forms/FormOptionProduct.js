import {Button, Form, Input, InputNumber, message, Select} from "antd";
import React, {useState} from "react";
import {Option} from "antd/es/mentions";
import {Constant} from "../../Constant";
import Request from "../../utils/Request";
import {hideDrawer} from "../../actions";
import {useDispatch} from "react-redux";

function FormOptionProduct({idProduct}) {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        console.log(values);
        const request = new Request(Constant.urlBase + Constant.option + "/" + idProduct);
        setLoading(true);
        request.methodSuccess = () => {
            message.success("Option salvata correttamente");
            setLoading(false);
            dispatch(hideDrawer());
        }
        request.methodError = () => {
            message.error("Errore durante il caricamento");
            setLoading(false);
        }
        request.fetchPost(values);
    };

    const onFinishFailed = (errorInfo) => {
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);
    };


    return(
        <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>

            <Form.Item name="description" label="Descrizione" required rules={[Constant.requiredField]}
                       tooltip="La descrizione della variante del prodotto">
                <Input placeholder="Inserisci descrizione" />
            </Form.Item>

            <Form.Item
                style={{width:"100%"}}
                tooltip="Unità di misura per la quantità del prodotto"
                       label="Unità di misura e quantità" rules={[Constant.requiredField]}>
                <Input.Group compact>

                    <Form.Item style={{width:"50%"}} name="unit" rules={[Constant.requiredField]}>
                        <Select style={{width:"100%"}} defaultValue={"0"}>
                            <Option value={"0"}>Selezionata Unità</Option>
                            <Option value={"KG"}>Peso (KG)</Option>
                            <Option value={"PZ"}>Pezzo (PZ)</Option>
                            <Option value={"LT"}>Volume (Litro)</Option>
                            <Option value={"MT"}>Dimensione (Metro)</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="quantity" style={{width:"50%"}} rules={[Constant.requiredField]}>
                        <InputNumber value={0.5} min={0.000000009} max={1000} style={{width:"100%"}} placeholder="Inserire quantità o valore"/>
                    </Form.Item>

                </Input.Group>
            </Form.Item>

            <Form.Item initialValue={1} name="price" label="Prezzo" rules={[Constant.requiredField]}
                       tooltip="Il prezzo si riferisce per la quantità selezionata">
                <InputNumber
                    defaultValue={1.23}
                    formatter={value => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/€\s?|(,*)/g, '')}/>
            </Form.Item>

            <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );

}

export default FormOptionProduct;
