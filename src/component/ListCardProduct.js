import React from "react";
import RowItemProduct from "./RowItemProduct";

class ListCardProduct extends React.Component{
    constructor(props) {
        super(props);
        
    }



    render() {
        let righe = [];
        this.props.lista.forEach((element, position)=>{
           righe.push(<RowItemProduct item={element}/>);
           if (position !== this.props.lista.length-1){
               righe.push(<div className="Divider"/> );
           }

        });
        return (
            <div className="List">
                {righe}
            </div>
        );
    }
}

export default ListCardProduct