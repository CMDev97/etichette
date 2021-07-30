import React from "react";

function MessageEndTable(props){

    return (
        <tr>
            <td colSpan={props.colSpan} className="alert alert-danger">
                <em>
                    Non ci sono elementi da mostrare
                </em>
            </td>
        </tr>
    );
}

export default MessageEndTable;