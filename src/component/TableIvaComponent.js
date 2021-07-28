import React from "react";
import Table from "react-bootstrap/Table";
import RowTableIva from "./RowTableIva";

class TableIvaComponent extends React.Component {
    

    constructor(props) {
        super(props);

    }

    render() {
        let row = [];
        if (this.props.list.length > 0){
            this.props.list.forEach((element) => {
                row.push(<RowTableIva id={element.id} value={element.value} description={element.description}/>);
            });
        }
        return (
            <Table striped borderless hover>
                <thead className="">
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {row}
                </tbody>
            </Table>
        );
    }


}

export default TableIvaComponent;
