
class Request {

    static GET_OPTION = () => {
        return {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
    };

    static DELETE_OPTION = () => {
        return {
            method:'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }
    }

    static POST_OPTION = (body) =>{
        return {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
    }

    constructor(url) {
        this._url = url;
    }

    set methodSuccess(handle){
        this._methodSuccess = handle;
    }

    set methodError(handle){
        this._methodError = handle;
    }

    fetchData = async () => {
        const rawData  = await fetch(this._url, Request.GET_OPTION());
        if (rawData.ok){
            this._methodSuccess(await rawData.json());
        } else {
            this._methodError(await rawData.error());
        }
    };

    fetchPost = async (body) => {
        const rawData = await fetch(this._url, Request.POST_OPTION(body));
        if (rawData.status === 201){
            console.log("Creato");
            this._methodSuccess();
        } else {
            console.log(rawData);
            this._methodError(rawData.status);
        }
    }

    fetchDelete = async ()=>{
        const rawData  = await fetch(this._url, Request.DELETE_OPTION());
        if (rawData.ok){
            this._methodSuccess();
        } else {
            this._methodError(await rawData.error());
        }
    }

}

export default Request;
