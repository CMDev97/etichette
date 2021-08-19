import Request from "../utils/Request";

export const retriveOptionProduct = (dispatch, id) => {
    let request = new Request('http://localhost:8080/Gestionale_war/api/options/product/'+ id);
    request.methodSuccess = (json) => {
        console.log(json);
        dispatch(setListOption(json));
    }
    request.fetchData().catch((error) => {
        console.log(error);
    })
}

const setListOption = (values) => {
    return {
        type:'SET_LIST_OPTION',
        values:values
    }
}