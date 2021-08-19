import React from "react";
import SelectProvince from "./select/SelectProvince";
import {Button, Form, Input, InputNumber} from "antd";


export function AziendaSetting(){
    const [form] = Form.useForm();

    const [value, setValue] = React.useState('108999999');

    const onfinish = (value) => {
        console.log(value)
    }

    return (
        <>
            <Form form={form} layout="vertical" onFinish={onfinish}
                initialValues={{
                    province:0
                }}>

                <Form.Item className="text-start mb-0">
                    <Form.Item name="denominazione" label="Denominazione"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input placeholder="Inserisci nome attività"/>
                    </Form.Item>
                    <Form.Item name="partitaIVA" label="Partita Iva"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}>
                        <Input min={11} max={11} placeholder="Inserisci numero partita Iva"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item className="text-start mb-0">
                    <Form.Item name="codiceFiscale" label="Codice Fiscale"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input min={16} max={16} placeholder="Inserisci codice fiscale"/>
                    </Form.Item>
                    <Form.Item name="codiceDestinatario" label="Codice Destinatario"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}>
                        <Input min={7} max={7} placeholder="Inserisci numero partita Iva"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item className="text-start mb-0">
                    <Form.Item name="indirizzoPEC" label="Indirizzo Pec"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input type="email" placeholder="Inserisci indirizzo PEC"/>
                    </Form.Item>
                    <Form.Item name="email" label="E-Mail"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}>
                        <Input type="email" min={7} max={7} placeholder="Inserisci e-mail"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item className="text-start mb-0">
                    <Form.Item name="tel1" label="Numero di Telefono"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input placeholder="Inserisci numero di telefono"/>
                    </Form.Item>
                    <Form.Item name="tel2" label="Numero di Telefono"
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}>
                        <Input type="email" min={7} max={7} placeholder="Inserisci numero di telefono 2"/>
                    </Form.Item>
                </Form.Item>

                <Form.Item className="text-start mb-0" >
                    <Form.Item name="via" label="Via"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(33% - 8px)' }}>
                        <Input placeholder="Inserisci nome della via"/>
                    </Form.Item>
                    <Form.Item name="civico" label="N. Civico"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(33% - 8px)', margin: '0 8px'  }}>
                        <Input placeholder="Inserisci numero civico"/>
                    </Form.Item>
                    <Form.Item name="cap" label="Cap"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(33%)' }}>
                        <InputNumber className="w-100" placeholder="Inserisci CAP" min={0} max={100000} value={value} onChange={setValue} />
                    </Form.Item>
                </Form.Item>
                <Form.Item className="text-start">
                    <Form.Item name="citta" label="Città"
                               rules={[{required: true}]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input placeholder="Inserisci nome della città"/>
                    </Form.Item>
                    <Form.Item name="province" label="Provincia" rules={[{required: true}]} style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                        <SelectProvince/>
                    </Form.Item>
                </Form.Item>
                <Form.Item className="mb-0 text-start">
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </>
    );
}