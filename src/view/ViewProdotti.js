import React, {useState} from "react";
import CustomTable from "../component/table/CustomTable";
import {Row, Col, Button} from "react-bootstrap";
import FormSearchComponent from "../component/FormSearchComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";
import {setContentDrawer, showDrawer} from "../actions";
import DrawerFormProduct from "../component/DrawerComponent/DrawerFormProduct";
import {reloadProduct} from "../actions/ActionProduct";
import {Constant} from "../Constant";
import {columsProduct} from "../component/Colums";


function ViewProdotti(){
    const dispatch = useDispatch();

    const [path, setPath] = useState(Constant.product);

    const startSearch = (value) => {
        setPath(Constant.product + "/search/" + value);
    }

    const cancelSearch = ()=>{
        setPath(Constant.product);
    }

    return (
        <div>
            <h2 className="mt-4">Prodotti</h2>
            <Row className="mt-5 d-flex justify-content-between">
                <Col md="5">
                    <FormSearchComponent onClickSearch={startSearch} onClickCancel={cancelSearch}/>
                </Col>
                <Col className="text-end">
                    <Button onClick={()=>{
                        dispatch(setContentDrawer(<DrawerFormProduct actionOnSave={reloadProduct}/>));
                        dispatch(showDrawer("Nuovo prodotto"));
                    }}>
                        <FontAwesomeIcon className="me-2" icon={faPlus}/> Nuovo
                    </Button>
                </Col>
            </Row>
            <CustomTable path={path} colums={columsProduct(dispatch)}/>
        </div>
    );
}

export default ViewProdotti;
