import {useEffect, useState} from "react";
import axios from "axios";
import {Constant} from "../Constant";


export function useGetData(url){
    const [data, setData] = useState({
        store:null,
        error:null,
        progress:true,
    });

    const fetch = async ()=>{
        try {
            setData({...data, progress: true});
            const response = await axios.get(Constant.urlBase + url);

            setData({...data, store: response.data, progress: false, error: null});
        } catch (e) {
            setData({...data,
                error: "Error request data",
                store: null,
                progress: false,
            });
        }
    }

    useEffect(()=>{
        setData({...data, error: null, progress: true});
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return {
        reload : fetch,
        store : data.store,
        error : data.error,
        progress : data.progress
    }

}
