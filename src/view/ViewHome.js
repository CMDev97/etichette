import React from "react";
import "./definition/Home.css";
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Title from "antd/es/typography/Title";
import {Button, Col, Row, Space} from "antd";
import {faCogs} from "@fortawesome/free-solid-svg-icons";
import {items} from "../dataMock/ItemsMenu";
import {useHistory} from "react-router-dom";
import FormSearchComponent from "../component/forms/FormSearchComponent";



function ViewHome(){

    const history = useHistory();

    return (
        <div className={"BaseHome"}>
            <div className={"Header-Home"}>
                <Title className={"Title"}>Benvenuti su Gestionale</Title>
                <Button shape={"round"} size={"large"}><FontAwesomeIcon className={"me-2"} size={"lg"} icon={faCogs}/> Settings</Button>
            </div>
            <Container className={"py-4"}>

                <FormSearchComponent/>

                <div className={"Container-Menu"}>
                    <Row gutter={[24,24]}>

                        {
                            items.map(item => {
                                return <Col hoverable span={6}>
                                    <div hoverable className={"Item-Menu"} onClick={
                                        () => {
                                            history.push(item.path);
                                        }
                                    }>
                                        <Space direction={"vertical"} align={"center"} size={"large"}>
                                            <FontAwesomeIcon size={"3x"} icon={item.icon}/>
                                            <Title level={5}>{item.name}</Title>
                                        </Space>
                                    </div>
                                </Col>

                            })
                        }


                    </Row>
                </div>

            </Container>
        </div>
    );

}

export default ViewHome;
