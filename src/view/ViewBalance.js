import React from "react";
import {Row, Col, Card, Form} from "react-bootstrap";
import ListSearchProduct from "../component/ListProductComponent/ListSearchProduct";
import TastierinoComponent from "../component/TastierinoLabel/TastierinoComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileImage} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";

function ViewBalance(){
    const editorState = useSelector(state => state.editor);
    return(
        <>
            <h2 className="mt-4 text-start">Etichette</h2>
            <Card className="mt-2 px-2 py-3">
                <Row className="justify-content-between">
                    <Col className="Border-Right" md="4">
                        <h4 className="ms-2 text-start">Prodotti</h4>
                        <ListSearchProduct/>
                    </Col>
                    <Col md="4">
                        <Row className="justify-content-center"><FontAwesomeIcon size="9x" icon={faFileImage}/></Row>
                        <h3>Nome del prodotto</h3>
                        <p className="text-start">Ingredienti: Farina tipo 0, Acqua, Lievito, Sale,</p>
                        <Row>
                            <Col className="text-start"><p>€/KG: 7.00</p></Col>
                            <Col className="text-end"><p>KG: {editorState.weight}</p></Col>
                        </Row>
                    </Col>
                    <Col className="Border-Left text-start" md="4">
                        <h4 className="ms-2">Editor etichetta</h4>
                        <div className="Border-Bottom py-2">
                            <Form.Check label="Breve (2 mesi)" name="preservationGroup" type="radio"/>
                            <Form.Check label="Media (3 mesi)" name="preservationGroup" type="radio"/>
                            <Form.Check label="Lunga (4 mesi)" name="preservationGroup" type="radio"/>
                        </div>
                        <TastierinoComponent/>
                    </Col>
                </Row>
            </Card>
        </>

    );
}

export default ViewBalance;