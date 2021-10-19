import {Descriptions, message, PageHeader, Skeleton} from "antd";
import React from "react";
import {ButtonPrintLabel} from "./ButtonPrintLabel";
import ButtonPreservation from "./ButtonPreservation";
import {useGetData} from "../utils/DataManager";
import {Constant} from "../Constant";
import Text from "antd/es/typography/Text";
import {useDispatch, useSelector} from "react-redux";
import {getDocument, setPreservation} from "../actions/ActionFormBalance";

export function DescriptionProduct({id}){

    const form = useSelector(state => state.formBalanceReducer);
    const dispatch = useDispatch();
    const {store, progress, error} = useGetData(Constant.product + "/" + id);

    let dataScad = new Date();
    dataScad.setMonth(dataScad.getMonth() + form.preservation);

    if (error) {
        return <div className={"shadow Box"}><Text>Errore dati : {error}</Text></div>
    }

    if (progress) return <div className={"shadow Box"}><Skeleton active /></div>

    const handleClickPrinter = () => {

        if (isNaN(form.weight)) {
            message.error("Errore convalida")
            return
        }
        if (store === null) {
            message.error("Errore! Prodotto non selezionato")
            return
        }
        if (form.option === 0 ) {
            message.error("Errore! Opzione non selezionate")
            return
        }

        let json = {
            product: store.id,
            option: form.option.id,
            weight: form.weight,
            preservation: form.preservation
        }

        getDocument(json);

    }

    return (
        <>
            <PageHeader
                className={"shadow Box"}
                ghost={false}
                title={store.nome}
                subTitle={form.option.price + " € / " + ((form.option.quantity === 1) ? '' : form.option.quantity) + " Kg"}

                extra={[
                    <ButtonPreservation value={form.preservation} onChangeValue={(e) => dispatch(setPreservation(e))}/>,
                    <ButtonPrintLabel onClick={handleClickPrinter}/>
                ]}>

                <Descriptions size={"small"} layout={"vertical"} column={3}>
                    <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Ingredienti" span={3}>{store.ingredients}</Descriptions.Item>
                    <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Confezionamento">{new Date().toLocaleDateString()}</Descriptions.Item>
                    <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Scadenza">{dataScad.toLocaleDateString()}</Descriptions.Item>
                    <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Code">{store.codice}</Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </>
    );
}
