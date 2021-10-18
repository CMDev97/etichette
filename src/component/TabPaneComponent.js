import React, {useState} from "react";
import {Card, Col, Empty, Pagination, Row, Spin} from "antd";
import {useGetData} from "../utils/DataManager";
import {Constant} from "../Constant";
import Text from "antd/es/typography/Text";


function TabPaneComponent({idCategory}){

    const [page, setPage]  = useState(1);
    const {store, progress, error} = useGetData( Constant.product + "?" + ((idCategory === 0) ? '':"category=" + idCategory + "&") +  "page=" + page + "&tot=16");

    const handleOnChangePage = (next) => { setPage(next) }

    if (progress){
        return <Spin size="large" />
    }

    if (error) {
        return <Text>Errore con la richiesta</Text>
    }

    if (store == null || store.content.length === 0){
        return <Empty/>
    }

    return (
        <>
            <Row className="p-2" gutter={[16, 16]}>
                {
                    store.content.map(item => (
                        <Col hoverable span={6}><Card hoverable onClick={()=>{console.log(item.id)}}>{item.nome}</Card></Col>
                    ))
                }
            </Row>

            <Pagination className="mt-3 float-end" current={page} onChange={handleOnChangePage} total={store.totalPages} />
        </>
    );


}

export default TabPaneComponent;
