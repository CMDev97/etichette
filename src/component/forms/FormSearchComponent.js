import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {Button, Input, Space} from "antd";


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
            <Input placeholder="Cerca..." onChange={handleOnChangeValue} value={state.inputValue} />
            {(state.search) ?
                <Button onClick={handleClickCancel} type={"primary"} danger>
                    <FontAwesomeIcon icon={faTimes}/>
                </Button>
                : ''}
            <Button onClick={handleClickSearch} type={"primary"} >
                <FontAwesomeIcon icon={faSearch}/>
            </Button>
        </Space>
    );
}

export default FormSearchComponent;
