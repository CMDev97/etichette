import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, message, Space} from "antd";
import Text from "antd/es/typography/Text";
import {hideModal} from "../../actions";
import Request from "../../utils/Request";
import {Constant} from "../../Constant";


function GenericDeleteModal({type, id}){
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const actionDelete = () => {
        setLoading(true);

        const request = new Request(Constant.urlBase + type + "/" + id);

        request.methodSuccess = () =>{
            setLoading(false)
            dispatch(hideModal());
            message.success("Cancellato correttamente");
        }

        request.methodError = (status) => {
            setLoading(false);
            dispatch(hideModal());
            message.error("Errore " + status);
        }

        request.fetchDelete();
    };

    return (
        <Space direction={"vertical"} style={{width:"100%"}}>

            <Text>Stai per eliminare l'oggetto con id : {id}</Text>

            <Space direction={"horizontal"} style={{marginTop:"2rem"}}>

                <Button onClick={()=>{dispatch(hideModal())}}>Cancel</Button>
                <Button loading={loading} type={"primary"} danger onClick={actionDelete}>Delete</Button>

            </Space>

        </Space>
    );
}


export default GenericDeleteModal;
