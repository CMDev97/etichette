import React from "react";

export function IndicatorDisplay(props){

    return (
        <div className={"p-3 bg-dark Border-Radius shadow"}>
            <h5 className={"text-white text-start"}>{props.title} : </h5>
            <div className="d-flex justify-content-between">
                <h1 className="text-white">{props.value}</h1>
                <h3 className={"text-white align-self-end"}>{props.subvalue}</h3>
            </div>
        </div>
    );
}