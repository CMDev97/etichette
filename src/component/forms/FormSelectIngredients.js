import {useGetData} from "../../utils/DataManager";
import {Button, Space, Spin} from "antd";
import CustomTable from "../table/CustomTable";
import {columsIngredientSelect} from "../table/Colums";
import {Constant} from "../../Constant";
import FormSearchComponent from "./FormSearchComponent";
import {useState} from "react";


export function FormSelectIngredients({id}){

    const {store, progress} = useGetData(Constant.productIngredients + "/ingredients/" + id);

    const [selected, setSelected] = useState((store) ? getOnlyId(store) : [] );


    const [path, setPath] = useState(Constant.ingredient);

    if (progress) {
        return <Spin size={"large"}/>
    }

    const handleChangeSelection = (valueSelected) => {
        setSelected(valueSelected);
    }

    const handleClickSearch = (value) => {
        setPath(Constant.ingredient + "?search=" + value);
    }

    const handleClickCancel = () => {
        setPath(Constant.ingredient);
    }

    const handleSave = () => {
        console.log(selected);
    }

    return <Space style={{width:"100%"}} direction={"vertical"}>

        <Space direction={"horizontal"} style={{display:"flex", justifyContent:"space-between"}}>

            <FormSearchComponent onClickSearch={handleClickSearch} onClickCancel={handleClickCancel} />
            <Button onClick={handleSave} type={"primary"}>Salva</Button>

        </Space>

        <CustomTable path={path} column={columsIngredientSelect()} selection selected={getOnlyId(store)} onChangeSelection={handleChangeSelection} />

    </Space>

}

function getOnlyId(data){
    return data.map(item => item.id);
}
