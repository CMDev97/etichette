import Request from "../utils/Request";

export const reloadTagDieta = (dispatch) => {
    let request = new Request('http://localhost:8080/Gestionale_war/api/tagdiet');
    request.methodSuccess = (json) => {
        dispatch(setListTag(json));
    }
    request.fetchData().catch((error) => {
        console.log(error);
    })
}

const setListTag = (values) => {
    return {
        type:"SET_LIST_TAG",
        values:values
    }
}