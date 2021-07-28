import React from "react";
import { Row} from "react-bootstrap";
import IvaViewEditComponent from "./component/IvaViewEditComponent";

class ViewSettings extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="mt-4">
                <h2>Impostazioni</h2>
                <Row>
                    <IvaViewEditComponent/>
                </Row>
            </div>
        );
    }

}

export default ViewSettings;