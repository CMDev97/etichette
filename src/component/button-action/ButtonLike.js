import React, {useState} from "react";
import {Button} from "antd";
import Request from "../../utils/Request";
import {Constant} from "../../Constant";


export function ButtonLike({type, id, initialState = false}){

    const [favourite, setFavourite] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        let request = new Request(Constant.urlBase + type + "/favourite/" + id);

        request.methodSuccess = () => {
            setFavourite(!favourite);
            setLoading(false);
        }

        request.methodError = () => {
            setFavourite(favourite);
            setLoading(false);
        }

        request.fetchData();
    }


    return <Button loading={loading} onClick={handleClick} shape="round">
        <i className= {(favourite) ? "fas fa-heart text-danger" : "far fa-heart text-danger"}></i>
    </Button>


}
