import React, {useEffect, useState} from 'react';
import TableCateogryComponent from "./TableCateogryComponent";

function CategorySettingsView(props){

    const [list, setList] = useState();
    const [loading, setLoading] = useState(false);

    const reloadData = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:8080/Gestionale_war/api/category', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setList(data);
            });
    };


    useEffect(()=>{
        reloadData();
    },[1]);

    return (
        <>
            <TableCateogryComponent list={list}/>
        </>
    );
}

export default CategorySettingsView;