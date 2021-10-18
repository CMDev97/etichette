import {faCogs, faHome, faCashRegister,  faPizzaSlice, faReceipt, faBalanceScale} from "@fortawesome/free-solid-svg-icons";

export const items = [
    {
        icon : faHome,
        name : "Home",
        path : "/"
    },
    {
        icon : faCashRegister,
        name : "Vendita",
        path : "/seller"
    },
    {
        icon : faPizzaSlice,
        name : "Prodotti",
        path : "/product"
    },
    {
        icon : faReceipt,
        name : "Ingredienti",
        path : "/ingredient"
    },
    {
        icon : faBalanceScale,
        name : "Bilancia",
        path : "/balance"
    },
    {
        icon : faCogs,
        name : "Impostazioni",
        path : "/settings"
    }
]
