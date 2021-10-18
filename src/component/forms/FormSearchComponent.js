import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {Button, Input, Space} from "antd";
import "../../stile/FormSearch.css";


function FormSearchComponent({onClickSearch, onClickCancel}) {

    const [state, setState] = useState({
        inputValue: '',
        search:false
    });

    const handleClickSearch = () => {
        onClickSearch?.(state.inputValue);
        setState({...state,
            search:true
        })
    }

    const handleClickCancel = () =>{
        onClickCancel?.();
        setState({...state, inputValue: '', search: false});
    }

    const handleOnChangeValue = (evt) => {
        setState({...state, inputValue: evt.target.value});
    }

    return (
        <Space>
            <Input placeholder="Cerca..." className="Input-Form-Search"  onChange={handleOnChangeValue} value={state.inputValue} />
            {(state.search) ?
                <Button className="Button-Form-Cancel" shape={"circle"} onClick={handleClickCancel}>
                    <FontAwesomeIcon icon={faTimes}/>
                </Button>
                : ''}
            <Button onClick={handleClickSearch} shape={"circle"} className={"Button-Form-Search"} >
                <FontAwesomeIcon icon={faSearch}/>
            </Button>
        </Space>
    );
}

export default FormSearchComponent;
