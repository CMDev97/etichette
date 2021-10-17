import Request from "../utils/Request";
import {Constant} from "../Constant";


export const reloadCategory = (dispatch) => {
    let request = new Request(Constant.urlBase + 'category');
    request.methodSuccess = (json) => {
        console.log(json);
        dispatch(setListCategory(json));
    }
    request.fetchData().catch((error) => {
        console.log(error);
    })
}


export const setListCategory = (list) => {
    return {
        type : "SET_LIST_CATEGORY",
        values:list
    }
}
