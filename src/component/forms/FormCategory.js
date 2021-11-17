import {useDispatch} from "react-redux";
import {Button, Form, Input, message} from "antd";
import {Constant} from "../../Constant";
import CustomSelectSearch from "../select/CustomSelectSearch";
import {hideDrawer} from "../../actions";
import React, {useState} from "react";
import Request from "../../utils/Request";


export function FormCategory({item = null}){

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);


    const handleSave = (values) => {
        if (values.icon.id === 0) {
            message.error("Devi selezionare un'icona ");
            return;
        }
        const object = {
            id: (item === null) ? 0 : item.id,
            description : values.description,
            icon : {
                id:values.icon
            }
        }
        const request = new Request(Constant.urlBase + Constant.category);
        request.methodSuccess = () => {
            message.success("Salvato correttamente");
            setLoading(false);
            dispatch(hideDrawer());
        }
        request.methodError = (status) => {
            message.error("Errore salvataggio : " + status);
            setLoading(false);
        }
        request.fetchPost(object);
    }


    return (
        <Form layout="vertical" initialValues={{
            description:(item === null) ? '' : item.description,
            icon:(item === null) ? {id:0} : (item.code == null) ? {id:0} : item
        }} onFinish={handleSave} preserve={false}>

            <Form.Item label="Description" name="description" rules={[Constant.requiredField]} tooltip="Inserire descrizione categoria">
                <Input placeholder="Pizze, Dolci, Salato..." />
            </Form.Item>

            <Form.Item label="Icon" name="icon" rules={[Constant.requiredField]} tooltip="Selezionare icona da associare alla categoria">
                <CustomSelectSearch type={Constant.icon} />
            </Form.Item>

            <Button onClick={()=>{dispatch(hideDrawer())}} className="me-2" >Annulla</Button>
            <Button loading={loading} htmlType="submit" type="primary">Salva</Button>

        </Form>
    );
}
