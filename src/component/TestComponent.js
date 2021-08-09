import React, { useState } from 'react';
import { Form, Input } from 'antd';

const CustomizedForm = ({ onChange, fields }) => (
    <Form
        name="global_state"
        layout="inline"
        fields={fields}
        onFieldsChange={(_, allFields) => {
            onChange(allFields);
        }}
    >
        <Form.Item
            name="username"
            label="Username"
            rules={[
                {
                    required: true,
                    message: 'Username is required!',
                },
            ]}
        >
            <Input />

        </Form.Item>
        <Form.Item
            name="password"
            label="Password"
            rules={[
                {
                    required: true,
                    message: 'password is required!',
                }
            ]}>
            <Input />

        </Form.Item>
    </Form>
);

const Demo = () => {
    const [fields, setFields] = useState([
        {
            name: ['username'],
            value: 'Ant Design',
        },
        {
            name: ['password'],
            value: 'Ant Design',
        }
    ]);
    return (
        <>
            <CustomizedForm
                fields={fields}
                onChange={(newFields) => {
                    console.log(newFields);
                    setFields(newFields);
                }}
            />
            <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
        </>
    );
};

export default Demo;