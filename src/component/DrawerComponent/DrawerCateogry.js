import {Button, Form, Input} from "antd";
import {hideDrawer} from "../../actions";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import SelectIcon from "../SelectIcon";


function DrawerCateogry(){
    const dispatch = useDispatch();

    const [fields, setFields] = useState([
        {
            name: ['description'],
            value: ''
        },
        {
            name: ['icon'],
            value: '-1'
        }
    ]);

    const finish = (values) => {
        console.log(values);
    }

    return (
        <>
            <Form layout="vertical" fields={fields} onFinish={finish}>
                <Form.Item label="Description" name="description" required tooltip="Inserire descrizione categoria">
                    <Input placeholder="PIZZE, DOlCI, PANE..." />
                </Form.Item>
                <Form.Item label="Icon" name="icon" required tooltip="Selezionare icona da associare alla categoria">
                    <SelectIcon/>
                </Form.Item>


                <Button onClick={()=>{dispatch(hideDrawer())}} className="me-2" >Annulla</Button>
                <Button htmlType="submit" type="primary">Salva</Button>
            </Form>
        </>
    );
}

export default DrawerCateogry;