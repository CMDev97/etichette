import React from "react";
import TableIvaComponent from "./component/TableIvaComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Button, Col, Row} from "react-bootstrap";
import ModalIva from "./component/ModalIva";

class ViewSettings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show : false,
            listIvas : []
        }
        this._handleClickNew = this._handleClickNew.bind(this);
    }

    _handleClickNew(){
        this.setState({
            show : !this.state.show
        })
    }

    componentDidMount() {
        this.reloadData();
    }

    reloadData(){
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:8080/api/iva', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({listIvas : data});
            });
    }

    render() {
        let edit = false
        return (
            <div className="mt-4">
                <h2>Impostazioni</h2>
                <Row>
                    <Col lg="6">
                        <Button onClick={this._handleClickNew} className="float-start" variant="primary"><FontAwesomeIcon icon={faPlus}/> Nuovo </Button>
                        <TableIvaComponent list={this.state.listIvas}/>
                    </Col>
                </Row>
                <ModalIva show={this.state.show} edit={edit} parent={this} onHide={this._handleClickNew}/>
            </div>
        );
    }

}

export default ViewSettings;