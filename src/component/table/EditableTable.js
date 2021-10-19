import React, { useContext, useState, useEffect, useRef } from 'react';
import {Table, Form, InputNumber, message} from 'antd';
import {Constant} from "../../Constant";
import Request from "../../utils/Request";
import {ButtonDeletePopconfirm} from "../button-action/ButtonDeletePopconfirm";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
                          title,
                          editable,
                          children,
                          dataIndex,
                          record,
                          handleSave,
                          ...restProps
                      }) => {

    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);

    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            if (values.incidenza !== record.incidenza) {
                handleSave({ ...record, ...values });
            }

        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <InputNumber ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

const columnsTable = [
    {
        title: 'incidenza',
        dataIndex: 'incidenza',
        width: '30%',
        editable: true,
    },
    {
        title: "Ingrediente",
        dataIndex: "ingrediente",
        key: "ingrediente",
        render: text => {
            return (<>{text.description}</>)
        }
    },
    {
        title:"Action",
        key:"id",
        render: (value) => (
            <>
                <ButtonDeletePopconfirm id={value.id} type={Constant.productIngredients}/>
            </>
        )
    }
];

const getColumnsEditable = (handleSave) => {

    return columnsTable.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: handleSave,
            }),
        };
    });
}

export function TableEditable({dataSource}){

    const [data, setData] = useState(dataSource);

    const [loading, setLoading] = useState(false);

    const handleSave = (row) => {
        setLoading(true);
        let request = new Request(Constant.urlBase + Constant.productIngredients + "/" + row.id);
        request.methodSuccess = () => {
            message.success("Incidenza aggiornata correttamente");
            setLoading(false);
            const newData = [...data];
            const index = newData.findIndex(item => row.id === item.id);
            const item = newData[index];
            newData.splice(index, 1, {
                ...item,
                ...row,
            });
            newData.sort((a, b)=>{
                if (a.incidenza < b.incidenza) {
                    return 1;
                }
                if (a.incidenza > b.incidenza) {
                    return -1;
                }
                return 0;
            })
            setData(newData );
        }
        request.methodError = (e) => {
            message.error("Errore con la modifica dell'incidenza " + e);
            setLoading(false);
        }
        request.fetchUpdate(row);
    }

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };



    return <Table
        loading={loading}
        components={components}
        rowClassName={() => 'editable-row'}
        dataSource={data}
        columns={getColumnsEditable(handleSave)}
    />
}




