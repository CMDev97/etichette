import React from "react";
import {Button} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPrint} from "@fortawesome/free-solid-svg-icons";


export function ButtonPrintLabel({onClick}) {


    return (

        <Button type="primary" onClick={()=> onClick()} icon={<FontAwesomeIcon className={"me-2"} icon={faPrint}/>}> Stampa</Button>

    );

}
