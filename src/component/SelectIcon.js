import React, {useState} from "react";
import {message, Select} from "antd";
import {Option} from "antd/es/mentions";
import {useEffect} from "react";
import parse from "html-react-parser";
import Request from "../utils/Request";

function SelectIcon(){

    const [icons, setIcons] = useState([]);

    const handleChange = (value) => {
        console.log(value);
    }

    useEffect(() => {
        console.log("Show");
        let request = new Request('http://localhost:8080/Gestionale_war/api/icon');
        request.methodSuccess = (json)=>{
            console.log(json);
            setIcons(json);
        }
        request.fetchData().catch(error => {
            message.error("Si è verificato un errore nello scaricare i dati!");
        });
    }, [1]);

    let option = [];
    icons.forEach(icon => {
        option.push(<Option value={icon.id}>{parse(icon.code)} {icon.description}</Option>)
    });

    return (
        <Select>
            <Option value="-1">Seleziona icona</Option>
            {option}
        </Select>
    );

}

export default SelectIcon;