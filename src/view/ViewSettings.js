import React from "react";
import {Row} from "react-bootstrap";
import IvaViewEditComponent from "../component/IvaViewEditComponent";

function ViewSettings(){
    return (
        <div className="mt-4">
            <h2>Impostazioni</h2>
            <Row>
                <IvaViewEditComponent/>
            </Row>
        </div>
    );
}

export default ViewSettings;