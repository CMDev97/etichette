import React, {useEffect} from "react";
import {Card, Row, Col, Pagination, Tabs} from "antd";
import {reloadCategory} from "../actions/ActionsCategory";
import {useDispatch, useSelector} from "react-redux";
import TabPaneComponent from "../component/TabPaneComponent";
import {setCategorySelected} from "../actions/ActionSell";
import parse from "html-react-parser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWallet, faCalendarAlt, faVoteYea, faCashRegister} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
const { TabPane } = Tabs;

function ViewHome(){
    const categoryReducer = useSelector(state => state.category);
    const sellReducer = useSelector(state => state.sell);
    const dispatch = useDispatch();

    useEffect(()=>{
        reloadCategory(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let tabs = [];

    if (categoryReducer.list.length !== 0) {
        tabs.push(<TabPane tab="Tutti" key={0} />);

        categoryReducer.list.forEach(i => (
            tabs.push(<TabPane tab={
                <span>
                  <>{parse(i.icon.code)} </>
                    {i.description}
                </span>
            } key={i.id} />)
        ))
    }

    const handleOnChange = (event)=> {
        console.log(event);
        dispatch(setCategorySelected(parseInt(event)));
    }

    return (
        <div className={"mt-5"}>
            <Row gutter={[8,8]}>
                <Col lg={14} xl={14}>
                    <Card>
                        <Tabs defaultActiveKey={sellReducer.categorySelected} tabPosition="top" onChange={handleOnChange}>
                            {tabs}
                        </Tabs>
                        <TabPaneComponent idCategory={sellReducer.categorySelected} page={sellReducer.page}/>
                        <Pagination className="mt-3 float-end" current={sellReducer.page}  total={sellReducer.totalPage} />
                    </Card>
                </Col>
                <Col lg={2} xl={2}>
                    <Button className="mb-2 w-100 px-0" type="primary">
                        <FontAwesomeIcon icon={faWallet}/>
                        <br/>
                        Paga
                    </Button>
                    <Button className="mb-2 w-100 px-0" type="primary">
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <br/>
                        Ordina
                    </Button>
                    <Button className="mb-2 w-100 px-0" type="primary">
                        <FontAwesomeIcon icon={faVoteYea}/>
                        <br/>
                        Chiusura
                    </Button>
                    <Button className="w-100 px-0" type="primary">
                        <FontAwesomeIcon icon={faCashRegister}/>
                        <br/>
                        Cassetto
                    </Button>
                </Col>
                <Col lg={8} xl={8}>
                    <Card className="bg-primary">
                        <span className="text-white d-flex justify-content-between">
                            <h3 className="text-white">Totale</h3>
                            <h3 className="text-white">€ 34.54</h3>
                        </span>
                        <span className="text-white d-flex justify-content-between">
                            <p className="text-white mb-0">Operatore</p>
                            <p className="text-white mb-0">Cristopher Moccia</p>
                        </span>
                    </Card>

                    <Card className="mt-2">

                    </Card>
                </Col>

            </Row>
        </div>
    );

}

export default ViewHome;
