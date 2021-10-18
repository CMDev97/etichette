import NavBarComponent from "../../component/NavBarComponent";
import {Container} from "react-bootstrap";


export function BaseLayout({children}){


    return <div className={"App"}>
        <NavBarComponent />
        <Container>
            {children}
        </Container>
    </div>

}
