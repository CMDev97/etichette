
const type = "http://";
const domain = "localhost";
const port = ":8080";
const war = "/Gestionale_war/api/";

export const Constant = {
    urlBase : type+domain+port+war,
    product:'product',
    reparto:'reparto',
    


    requiredField:{
        required:true,
        message:"Questo campo è obbligatorio"
    }

}