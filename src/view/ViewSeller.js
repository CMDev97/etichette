import {Card, Col, Row} from "antd";
import {TabsCategoryProduct} from "../component/details/TabsCategoryProduct";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faCashRegister, faVoteYea, faWallet, faHome} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useHistory} from "react-router-dom";


export function ViewSeller(){

    const history = useHistory();

    return (
        <div className={"m-5"}>


            <Row gutter={[8,8]} className={"mt-4"}>
                <Col lg={14} xl={14}>
                    <TabsCategoryProduct/>
                </Col>
                <Col lg={2} xl={2}>
                    <Button className="mb-2 w-100 px-0" onClick={()=> {
                        history.push("/");
                    }}>
                        <FontAwesomeIcon icon={faHome}/>
                        <br/>
                        Home
                    </Button>
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
