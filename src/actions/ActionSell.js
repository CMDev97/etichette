import Request from "../utils/Request";
import {message} from "antd";
import {Constant} from "../Constant";


export const retriveProductCategory = (dispatch, id, pagina) => {
    let request = new Request(Constant.urlBase + Constant.product + "/category?idCategory=" + id + "&pagina=" + pagina + "&numElementi=16");
    request.methodSuccess = (json) =>{
        console.log(json);
        dispatch(setProductSell(json.content));
        dispatch(setTotalPage(json.totalPages));
    }
    request.fetchData().catch((error)=>{
        console.log(error);
        message.error("Errore di connessione con il server");
    });
}

const setProductSell = (values) => {
    return {
        type:'SET_PRODUCT_VISIBLE',
        values:values
    }
}

export const setTotalPage = (value)=>{
    return {
        type:'SET_TOTAL_PAGE',
        value:value
    }
}

export const setPage = (value) => {
    return {
        type:'SET_PAGE',
        value:value
    }
}

export const setCategorySelected = (value) => {
    return {
        type:'SET_CATEGORY_SELECTED',
        value:value
    }
}

