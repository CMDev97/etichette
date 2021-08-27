import React from "react";
import {useSelector} from "react-redux";
import {Button, message} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPrint} from "@fortawesome/free-solid-svg-icons";
import printJS from 'print-js';


export function ButtonPrintLabel() {
    const reducer = useSelector(state => state.balance);


    return (
        <Button type="primary" onClick={()=> {
            if (isNaN(reducer.weight)) {
                message.error("Errore convalida")
                return
            }
            if (reducer.product === undefined) {
                message.error("Errore! Prodotto non selezionato")
                return
            }
            if (reducer.idOption === 0 ) {
                message.error("Errore! Opzione non selezionate")
                return
            }

            let json = {
                idProduct: reducer.idProduct,
                idOption: reducer.idOption,
                wight:reducer.weight,
                preservation: reducer.preservation
            }

            const url = 'http://localhost:8080/Gestionale_war/api/label/getPDF?idProduct=' + json.idProduct +
                "&idOption=" + json.idOption + "&weight=" + json.wight + "&preservation=" + json.preservation;
            console.log(url);

            printJS({
                printable: url,
                type: 'pdf',
                onError: function  (error) {
                    alert('Error found => ' + error.message)
                }
            });
        }} icon={<FontAwesomeIcon className={"me-2"} icon={faPrint}/>}> Stampa</Button>
    );

}