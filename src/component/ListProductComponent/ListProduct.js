import React from "react";
import RowItemProduct from "./RowItemProduct";

class ListProduct extends React.Component{

    constructor(props) {
        super(props);
    }

    handleClickItemProduct(idProduct){
        console.log(idProduct);
    }

    render() {
        let righe = [];
        this.props.lista.forEach((element)=>{
           righe.push(<RowItemProduct key={element.id} item={element} onClickItem={this.handleClickItemProduct}/>);
        });
        return (
            <ul className="list-group list-group-flush List mt-2">
                {righe}
            </ul>
        );
    }
}

export default ListProduct