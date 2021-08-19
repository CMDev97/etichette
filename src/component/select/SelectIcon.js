import React, {useState} from "react";
import {message, Select} from "antd";
import {Option} from "antd/es/mentions";
import {useEffect} from "react";
import parse from "html-react-parser";
import Request from "../../utils/Request";

function SelectIcon({ value, onChange }, props){

    const [icons, setIcons] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleChange = (value) => {
        onChange?.(value);
    }

    useEffect(() => {
        let request = new Request('http://localhost:8080/Gestionale_war/api/icon');
        request.methodSuccess = (json)=>{
            setIcons(json);
            setLoading(false);
        }
        request.fetchData().catch(error => {
            setLoading(false);
            message.error("Si è verificato un errore nello scaricare i dati!");
        });
    }, [1]);

    let option = [];
    icons.forEach(icon => {
        option.push(<Option  value={icon.id} key={icon.id}>{parse(icon.code)} {icon.description}</Option>)
    });

    return (
        <Select loading={loading} defaultValue={value} onChange={handleChange}>
            <Option value={0}>Seleziona icona</Option>
            {option}
        </Select>
    );

}

export default SelectIcon;