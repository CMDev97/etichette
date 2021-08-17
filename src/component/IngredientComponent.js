import React from "react";
import {Col} from "react-bootstrap";
import {Button, Card, List} from "antd";
import {faTrashAlt, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function IngredientComponent(props){



    return (
        <Col md={4}>
            <Card className="pb-3 shadow">
                <div className="card-body  d-flex">
                    <h3 className="card-title w-100 text-start mb-0">Ingredienti</h3>
                    <span className="flex-shrink-1">
						<Button shape="round" type="primary"><FontAwesomeIcon icon={faPlusCircle}/></Button>
					</span>
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={props.items}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.ingrediente.descrizione}
                                description={item.incidenza + "%"}
                            />
                            <Button type="danger" shape="round"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                        </List.Item>
                    )}
                />
            </Card>
        </Col>
    );

}

export default IngredientComponent;