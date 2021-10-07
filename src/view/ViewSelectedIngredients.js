import {Button, Col, Row} from "antd";
import ViewDefaultTable from "../component/table/ViewDefaultTable";
import {columsIngredientSelect} from "../component/Colums";
import {Constant} from "../Constant";
import {DragSortingTable} from "../component/table/MoveTable";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";



export function ViewSelectedIngredients(){

    const [selected, setSelected] = useState([]);

    const onChangeSelection = (value) =>{
        console.log(value);
        setSelected(value);
    }

    console.log("Selected state : " , selected);

    return (
        <Row gutter={[16,16]}>
            <Col span={11}>
                <ViewDefaultTable type={Constant.ingredient} selection={true}  onChangeSelection={onChangeSelection} columns={columsIngredientSelect()}/>
            </Col>
            <Col span={2} style={{
                alignSelf:"center"
            }}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} size={"2x"} />
            </Col>
            <Col span={11}>
                <Button style={{margin:"0.5rem 0"}} type={"primary"}>Salva</Button>
                <DragSortingTable items={selected} />
            </Col>
        </Row>
    );

}
