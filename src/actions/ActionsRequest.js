import {product} from "../dataMock/Mock";


export const getRequest = (path, loading, success, error) => {
    success(product);

}
