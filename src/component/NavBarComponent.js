import React from "react";
import {NavLink} from "react-router-dom";

function NavBarComponent(){
    return (
        <div className="NavBar shadow-sm">
            <h2>Gestion</h2>
            <ul className="mt-3">
                <NavLink exact activeClassName="Active" to="/"><li >Home</li></NavLink>
                <NavLink exact activeClassName="Active" to="/product"><li >Prodotti</li></NavLink>
                <NavLink exact activeClassName="Active" to="/labels"><li >Etichette</li></NavLink>
                <NavLink exact activeClassName="Active" to="/settings"><li >Impostazioni</li></NavLink>
            </ul>
        </div>
    );
}

export default NavBarComponent;