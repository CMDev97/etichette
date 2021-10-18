import {Card, Spin, Tabs} from "antd";
import TabPaneComponent from "../TabPaneComponent";
import React, {useState} from "react";
import {useGetData} from "../../utils/DataManager";
import {Constant} from "../../Constant";
import Text from "antd/es/typography/Text";
import {TabPane} from "react-bootstrap";
import parse from "html-react-parser";


export function TabsCategoryProduct(){

    const [category, setCategory] = useState(0);

    const {store, progress, error} = useGetData( Constant.category + "?page=1&tot=160");

    const handleOnChange = (value) => {
        console.log("Tabs Category change " , value);
        setCategory(value);
    }

    if (error){
        return <Text>Errore durante la richiesta dati</Text>
    }

    if (progress) {
        return <Spin size={"large"}/>
    }

    return <Card>
        <Tabs defaultActiveKey={category} tabPosition="top" onChange={handleOnChange}>
            {
                store.content.map((item, position) => {
                    let items = [];
                    if (position === 0){
                        items.push(<TabPane tab="Tutti" key={0} />)
                    }
                    items.push(<TabPane tab={<span><>{parse(item.icon.code)} </>{item.description} </span>} key={item.id} />)
                    return items;
                })
            }
        </Tabs>
        <TabPaneComponent idCategory={category}/>
    </Card>
}
