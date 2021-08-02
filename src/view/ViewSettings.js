import React from "react";
import {Row, Col} from "react-bootstrap";
import IvaViewEditComponent from "../component/IvaViewEditComponent";
import {Menu} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStoreAlt, faUserAlt, faPrint, faCashRegister, faPercent, faTags, faChevronRight} from "@fortawesome/free-solid-svg-icons";

function ViewSettings(){
    return (
        <div className="mt-4">
            <h2>Impostazioni</h2>
            <Row>
                <Col className="card p-3" md="3">
                    <Menu
                        style={{borderRight:"0px"}}
                        className="w-100 border-0"
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}>

                        <Menu.Item key="1" icon={<FontAwesomeIcon icon={faStoreAlt}/>}>
                            Dati attività
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FontAwesomeIcon icon={faUserAlt}/>}>
                            Dati Personali
                        </Menu.Item>
                        <Menu.Item key="3" icon={<FontAwesomeIcon icon={faCashRegister} />}>
                                Ricevitore Fiscale
                        </Menu.Item>
                        <Menu.Item className="w-100" key="4" icon={<FontAwesomeIcon icon={faPrint}/>}>
                            Stampanti
                        </Menu.Item>
                        <Menu.Item key="5" icon={<FontAwesomeIcon icon={faPercent} />}>
                            Reparti IVA
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FontAwesomeIcon icon={faTags} />}>
                                Categorie
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col className="card ms-2 p-4">
                    <IvaViewEditComponent/>
                </Col>
            </Row>
        </div>
    );
}

export default ViewSettings;