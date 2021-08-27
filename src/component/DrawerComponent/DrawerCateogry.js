import {Button, Form, Input} from "antd";
import {hideDrawer} from "../../actions";
import React from "react";
import {useDispatch} from "react-redux";
import SelectIcon from "../select/SelectIcon";
import {saveCategory} from "../../actions/ActionsCategory";
import {Constant} from "../../Constant";


function DrawerCateogry(props){
    const dispatch = useDispatch();

    const finish = (values) => {
        const items = {
            id: (props.item === undefined) ? 0 : props.item.id,
            description : values.description,
            idIcon : values.icon
        }
        saveCategory(dispatch, items);
    }

    return (
        <>
            <Form layout="vertical" initialValues={{
                      description:(props.item === undefined) ? '' : props.item.description,
                      icon:(props.item === undefined) ? 0 : props.item.idIcon
                  }} onFinish={finish}>

                <Form.Item label="Description" name="description" rules={[Constant.requiredField]} tooltip="Inserire descrizione categoria">
                    <Input placeholder="PIZZE, DOlCI, PANE..." />
                </Form.Item>

                <Form.Item label="Icon" name="icon" rules={[Constant.requiredField]} tooltip="Selezionare icona da associare alla categoria">
                    <SelectIcon/>
                </Form.Item>

                <Button onClick={()=>{dispatch(hideDrawer())}} className="me-2" >Annulla</Button>
                <Button htmlType="submit" type="primary">Salva</Button>

            </Form>
        </>
    );
}

export default DrawerCateogry;