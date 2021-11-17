
const type = "http://";
const domain = "localhost";
const port = ":8080";
const war = "/api/";

export const Constant = {
    urlBase : type+domain+port+war,
    product:'product',
    iva:'ivas',
    ingredient:'ingredients',
    icon:'icons',
    category:"categories",
    option: "variants",
    productIngredients : "incidenza",


    requiredField:{
        required:true,
        message:"Questo campo è obbligatorio"
    },


}
