import React, {useEffect} from "react";
import {Row, Col, Card, Empty} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {retriveProductCategory} from "../actions/ActionSell";


function TabPaneComponent(props){
    const sellReducer = useSelector(state => state.sell);
    const dispatch = useDispatch();

    useEffect(()=>{
        retriveProductCategory(dispatch, props.idCategory, props.page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.idCategory, props.page]);

    let col = [];
    if (sellReducer.productVisible.length !== 0){
        sellReducer.productVisible.forEach(element => {
            col.push(<Col hoverable span={6}><Card hoverable onClick={()=>{console.log(element.id)}}>{element.nome}</Card></Col>)
        })
    } else {
        col.push(<Col span={24}><Empty /></Col>);
    }

    return (
        <Row className="p-2" gutter={[16, 16]}>
            {col}
        </Row>
    );


}

export default TabPaneComponent;
