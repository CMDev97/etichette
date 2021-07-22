
import React from "react";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

class RowTableIva extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="align-middle">
                <td>{this.props.id}</td>
                <td>{this.props.description}</td>
                <td>{this.props.value}</td>
                <td>
                    <Button className="me-2" variant="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button variant="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </td>
            </tr>
        );
    }

}

export default RowTableIva;