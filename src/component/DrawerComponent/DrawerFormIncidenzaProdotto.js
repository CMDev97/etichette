import {useSelector} from "react-redux";
import {Button, Drawer, Form, Input, InputNumber, message, Space} from "antd";

import React, {useState} from "react";
import {Constant} from "../../Constant";
import {MinusCircleOutlined, PlusOutlined, } from "@ant-design/icons";
import ViewDefaultTable from "../table/ViewDefaultTable";
import {columsIngredientSelect} from "../Colums";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

function DrawerFormIncidenzaProdotto(props){
    const formReducer = useSelector(state => state.form);

    const [visible, setVisible] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        //addIncidenza(dispatch, values, props.idProduct);
    };

    const onFinishFailed = (errorInfo) => {
        const hide = message.error(errorInfo.errorFields[0].name + " : " + errorInfo.errorFields[0].errors);
        setTimeout(hide, 2500);
    };

    const onChangeSelection = (ingredients)=>{
        setSelectedIngredients(ingredients);
    }


    return(
        <>
        <Form form={form}

              layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>

            <Form.List name={"incidenze"}>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'ingrediente']}
                                    fieldKey={[fieldKey, 'ingrediente']}
                                    rules={[{ required: true, message: 'Missing first name' }]}
                                >
                                    <Input placeholder="First Name" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'incidenza']}
                                    fieldKey={[fieldKey, 'incidenza']}
                                    rules={[Constant.requiredField]}
                                    tooltip="Devi inserire quanto incide tale ingrediente nel prodotto">

                                    <InputNumber min={10} max={100} defaultValue={10} />

                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => setVisible(true)} block icon={<PlusOutlined />}>
                                Add Ingrediente
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>





            <Form.Item>
                <Button loading={formReducer.loading} type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>

        <Drawer
            title={"Ingredienti"}
            width={650}
            closable={false}
            onClose={()=>{setVisible(false)}}
            visible={visible}>
            <ViewDefaultTable title={"Scegli ingredienti"} type={Constant.ingredient} selection={true}
                              columns={columsIngredientSelect()} onChangeSelection={onChangeSelection}
                              extra={<>
                              <span>{selectedIngredients.length + " ingredienti selezionati"}</span>
                                  {(selectedIngredients.length > 0) ? <Button type={"primary"} className={"ms-2"} icon={<FontAwesomeIcon icon={faCheck}/>}/> : ''} </>}
            />
        </Drawer>
        </>
    );
}

export default DrawerFormIncidenzaProdotto;
