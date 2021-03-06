import React from "react";
import {NavLink} from "react-router-dom";

function NavBarComponent(){
    return (
        <div className="NavBar shadow-sm">
            <h2>Gestion</h2>
            <ul className="mt-3">
                <NavLink exact activeClassName="Active" to="/"><li>Home</li></NavLink>
                <NavLink exact activeClassName="Active" to="/seller"><li>Vendita</li></NavLink>
                <NavLink  activeClassName="Active" to="/product"><li>Prodotti</li></NavLink>
                <NavLink exact activeClassName="Active" to="/ingredient"><li>Ingredienti</li></NavLink>
                <NavLink exact activeClassName="Active" to="/balance"><li>Bilancia</li></NavLink>
                <NavLink exact activeClassName="Active" to="/settings"><li>Impostazioni</li></NavLink>
            </ul>
        </div>
    );
}

export default NavBarComponent;
