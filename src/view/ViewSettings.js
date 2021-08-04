import React, {useState} from "react";
import {Row, Col, Card} from "react-bootstrap";
import IvaSettingsView from "../component/IvaSettingsView";
import {Menu} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStoreAlt, faUserAlt, faPrint, faCashRegister, faPercent, faTags, faFileImage} from "@fortawesome/free-solid-svg-icons";
import IconSettingsView from "../component/IconSettingsView";
import CategorySettingsView from "../component/CategorySettingsView";
import Demo from "../component/TestComponent";

function ViewSettings(){
    const [keyMenu, setKeyMenu] = useState('1');

    const handleClick = (event) =>{
        console.log(event);
        setKeyMenu(event.key);
    }

    let view = '';

    switch (keyMenu){
        case '1':
            view = <Demo/>
            break;
        case '5':
            view = <IvaSettingsView/>
            break;
        case '6':
            view = <CategorySettingsView/>
            break;
        case '7':
            view = <IconSettingsView/>
            break;
        default:
            view = <h3>{keyMenu}</h3>
            break;
    }

    return (
        <div className="mt-4">
            <h2>Impostazioni</h2>
            <Row >
                <Col md="3 mt-2">
                    <Card className="h-auto p-3 m-0">
                        <Menu
                            onClick={handleClick}
                            className="w-100 border-0"
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
                            <Menu.Item key="7" icon={<FontAwesomeIcon icon={faFileImage} />}>
                                Icone di sistema
                            </Menu.Item>
                        </Menu>
                    </Card>
                </Col>
                <Col className="card mt-2 p-4">
                    {view}
                </Col>
            </Row>
        </div>
    );
}

export default ViewSettings;