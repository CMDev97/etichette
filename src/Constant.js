
const type = "http://";
const domain = "www.flicodev.it";
const port = ":8080";
const war = "/gestionale/api/";

export const Constant = {
    urlBase : type+domain+port+war,
    product:'product',
    reparto:'reparto',
    ingredient:'ingredients',
    icon:'icon',



    requiredField:{
        required:true,
        message:"Questo campo è obbligatorio"
    }

}
